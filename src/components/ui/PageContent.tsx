interface PageContentProps {
    className?: string;
    children?: React.ReactNode;
    wide?: boolean;
}

export default function PageContent({
    className = '',
    children,
    wide = false
}: PageContentProps) {
    return (
        <div className={`${wide ? '' : 'container mx-auto px-4'}  py-16 ${className}`}>
                {children}
        </div>
    );
}