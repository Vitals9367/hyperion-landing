import { cn } from "@/lib/utils";

interface DownloadLinkProps {
  href: string;
  filename: string;
  text: string;
  className?: string;
}

export function DownloadLink({
  href,
  filename,
  text,
  className,
}: DownloadLinkProps): React.JSX.Element {
  return (
    <a
      href={href}
      download={filename}
      className={cn(
        "text-yellow-500 no-underline hover:text-yellow-400",
        className,
      )}
    >
      {text}
    </a>
  );
}
