import AccordionFooter from "./AccordianFooter";
import FooterLargeScreen from "./FooterLargeScreen";

const Footer = () => {
  return (
    <>
      <FooterLargeScreen />

      <div className="flex sm:hidden flex-col w-full px-6 sm:px-[60px] xl:px-[100px] py-8 bg-gray-800">
        <AccordionFooter />
        <div className="flex flex-col items-center justify-center mt-6 text-white text-sm font-light">
          <p className="text-blue-50 mb-3 text-center">
            Copyright {new Date().getFullYear()} USA Underwriters
            <br />
            Privacy Policy | Terms of Use
          </p>
          <p>( Built by Neutrix - Powered by Neutrix Systems )</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
