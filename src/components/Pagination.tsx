import { ChevronLeft, ChevronRight } from "lucide-react";

type Pagination = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void
};

export function Pagination({ currentPage, totalPages, onPageChange }: Pagination) {
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const showPages = 5;

        if (totalPages <= showPages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        pages.push(1);

        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1);

        if (currentPage <= 3) {
            endPage = Math.min(totalPages - 1, 4);
        } else if (currentPage >= totalPages - 2) {
            startPage = Math.max(2, totalPages - 3);
        }

        if (startPage > 2) pages.push("...");

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < totalPages - 1) pages.push("...");

        pages.push(totalPages);

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex items-center justify-center gap-2 pb-20">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/45 bg-background-elevated/15 text-foreground transition-all duration-300 hover:border-blue/30 hover:bg-blue/5 hover:text-blue disabled:pointer-events-none disabled:opacity-50"
                aria-label="Previous page"
                title="Previous page"
            >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <div className="flex items-center gap-1">
                {pageNumbers.map((page, idx) => {
                    if (page === "...") {
                        return (
                            <span key={`ellipsis-${idx}`} className="px-2 py-1 text-muted-foreground/60 font-mono text-xs">
                                ···
                            </span>
                        );
                    }

                    const pageNum = page as number;
                    const isCurrentPage = pageNum === currentPage;

                    return (
                        <button
                            key={pageNum}
                            onClick={() => onPageChange(pageNum)}
                            className={`relative h-10 min-w-10 rounded-lg font-mono text-sm font-medium transition-all duration-300 ${isCurrentPage
                                    ? "bg-gradient-to-br from-blue via-blue/90 to-violet text-background-elevated shadow-lg shadow-blue/30 scale-105"
                                    : "text-muted-foreground hover:text-foreground hover:bg-background-elevated/30 border border-transparent hover:border-border/50"
                                }`}
                            aria-label={`Page ${pageNum}`}
                            aria-current={isCurrentPage ? "page" : undefined}
                        >
                            {isCurrentPage && (
                                <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue/20 to-violet/20 blur-md -z-10" />
                            )}
                            {pageNum}
                        </button>
                    );
                })}
            </div>

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/45 bg-background-elevated/15 text-foreground transition-all duration-300 hover:border-blue/30 hover:bg-blue/5 hover:text-blue disabled:pointer-events-none disabled:opacity-50"
                aria-label="Next page"
                title="Next page"
            >
                <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
        </div>
    );
}
