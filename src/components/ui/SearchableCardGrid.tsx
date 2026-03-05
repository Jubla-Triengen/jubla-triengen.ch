import { Search } from 'lucide-react';
import { Fragment, ReactNode, useMemo, useState } from 'react';

type SearchableValue = string | number | boolean | null | undefined;

interface SearchableCardGridProps<T> {
  items: T[];
  getItemKey: (item: T) => string | number;
  renderCard: (item: T) => ReactNode;
  getSearchValues?: (item: T) => SearchableValue[];
  searchPlaceholder?: string;
  emptyResultsText?: string;
  className?: string;
  gridClassName?: string;
}

function normalize(value: string): string {
  return value
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function isSubsequence(query: string, target: string): boolean {
  let queryIndex = 0;

  for (let targetIndex = 0; targetIndex < target.length && queryIndex < query.length; targetIndex += 1) {
    if (query[queryIndex] === target[targetIndex]) {
      queryIndex += 1;
    }
  }

  return queryIndex === query.length;
}

function fuzzyMatch(query: string, candidate: string): boolean {
  if (!query || !candidate) {
    return false;
  }

  if (candidate.includes(query)) {
    return true;
  }

  return isSubsequence(query, candidate);
}

function flattenValues(value: unknown): SearchableValue[] {
  if (value == null) {
    return [];
  }

  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return [value];
  }

  if (Array.isArray(value)) {
    return value.flatMap(flattenValues);
  }

  if (typeof value === 'object') {
    return Object.values(value).flatMap(flattenValues);
  }

  return [];
}

export default function SearchableCardGrid<T>({
  items,
  getItemKey,
  renderCard,
  getSearchValues,
  searchPlaceholder = 'Suchen...',
  emptyResultsText = 'Keine passenden Einträge gefunden.',
  className = '',
  gridClassName = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
}: SearchableCardGridProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');

  const normalizedQuery = normalize(searchTerm);
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);

  const filteredItems = useMemo(() => {
    if (queryTokens.length === 0) {
      return items;
    }

    return items.filter((item) => {
      const values = getSearchValues ? getSearchValues(item) : flattenValues(item);
      const normalizedValues = values
        .map((value) => normalize(String(value ?? '')))
        .filter(Boolean);

      return queryTokens.every((token) => normalizedValues.some((candidate) => fuzzyMatch(token, candidate)));
    });
  }, [getSearchValues, items, queryTokens]);

  return (
    <div className={className}>
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 font-mundial font-light text-gray-800 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-jubla-yellow"
        />
      </div>

      {filteredItems.length > 0 ? (
        <div className={gridClassName}>
          {filteredItems.map((item) => (
            <Fragment key={getItemKey(item)}>{renderCard(item)}</Fragment>
          ))}
        </div>
      ) : (
        <p className="text-center font-mundial font-light text-gray-500 py-10">{emptyResultsText}</p>
      )}
    </div>
  );
}