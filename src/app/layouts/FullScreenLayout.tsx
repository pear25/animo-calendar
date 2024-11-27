type FullScreenLayoutProps = {
  children: React.ReactNode;
};

export const FullScreenLayout = ({ children }: FullScreenLayoutProps) => {
  return (
    <div className="bg-main-menu font-bungee-tint h-screen w-screen bg-cover">
      {children}
    </div>
  );
};
