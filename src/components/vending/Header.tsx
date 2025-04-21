
interface HeaderProps {
  title: string;
  location: string;
}

export const Header = ({ title, location }: HeaderProps) => {
  return (
    <header className="bg-[#3C6255] text-white py-4 shadow-md">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
          <div className="text-sm bg-[#EDF1D6] text-[#3C6255] px-3 py-1 rounded-full">
            {location}
          </div>
        </div>
      </div>
    </header>
  );
};
