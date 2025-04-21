
interface FooterProps {
  supportPhone: string;
}

export const Footer = ({ supportPhone }: FooterProps) => {
  return (
    <footer className="bg-[#3C6255] text-white py-4 mt-auto">
      <div className="container text-center text-sm">
        <p>© {new Date().getFullYear()} ЭкоАвтомат. Все права защищены.</p>
        <p className="text-[#EDF1D6] mt-1">Техническая поддержка: {supportPhone}</p>
      </div>
    </footer>
  );
};
