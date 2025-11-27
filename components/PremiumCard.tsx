import React from 'react';

interface PremiumCardProps {
  title: string;
  tags?: string[];
  summary: string;
  image?: string;
  icon?: string;
  gradient?: string;
  className?: string;
}

export function PremiumCard({
  title,
  tags = [],
  summary,
  image,
  icon,
  gradient = 'from-brand-primary/20 to-brand-primary/5',
  className = '',
}: PremiumCardProps) {
  return (
    <div
      className={`
        group relative rounded-2xl bg-white dark:bg-neutral-900
        border border-transparent dark:border-neutral-800
        shadow-[0_2px_4px_rgba(0,0,0,0.04)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
        hover:border-neutral-200/60 dark:hover:border-neutral-700
        hover:bg-neutral-50/60 dark:hover:bg-neutral-800
        ${className}
      `}
    >
      {/* Image or Icon Container */}
      {(image || icon) && (
        <div
          className={`
            relative h-48 bg-gradient-to-br ${gradient}
            rounded-t-2xl flex items-center justify-center
            overflow-hidden
            transition-all duration-300
            group-hover:scale-[1.01]
            animate-fadeIn
          `}
        >
          {icon && (
            <span className="text-6xl">
              {icon}
            </span>
          )}
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-brand-primary/5 transform group-hover:scale-105 transition-transform"></div>
        </div>
      )}

      {/* Content Container */}
      <div
        className="
          p-5 md:p-6 flex flex-col gap-3
          transition-all duration-300
          group-hover:-translate-y-0.5
        "
      >
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="
                  inline-block px-3 py-1
                  bg-brand-primary/10 dark:bg-brand-primary/20
                  text-brand-primary dark:text-brand-primary
                  text-xs font-semibold rounded-full
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3
          className="
            text-lg md:text-xl font-bold
            text-gray-900 dark:text-neutral-100
            group-hover:text-brand-primary dark:group-hover:text-brand-primary
            transition-colors
          "
        >
          {title}
        </h3>

        {/* Summary */}
        <p
          className="
            text-sm md:text-[15px] leading-relaxed
            text-neutral-600 dark:text-neutral-400
          "
        >
          {summary}
        </p>
      </div>
    </div>
  );
}
