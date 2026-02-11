const SectionLabel = ({ children }: { children: string }) => (
  <span className="font-mono-label text-xs tracking-widest text-muted-foreground uppercase">
    ( {children} )
  </span>
);

export default SectionLabel;
