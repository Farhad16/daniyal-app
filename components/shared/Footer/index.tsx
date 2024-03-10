import { footerSectionOne, footerSectionTwo } from "@/constance/footer-content";
import React from "react";
import FooterContent from "./FooterContent";
import AccordionFooter from "./AccordianFooter";

const FooterTitle = ({ title }: any) => {
  return (
    <h2 className="font-medium text-base sm:text-lg text-white">{title}</h2>
  );
};

const Footer = () => {
  return (
    <>
      <div className="hidden sm:flex flex-col w-full">
        <div className="bg-gray-800 px-6 sm:px-[60px] xl:px-[100px] flex flex-col py-10">
          <div className="flex flex-wrap items-center w-full justify-between">
            {footerSectionOne.map((sec) => (
              <div
                className={`md:w-1/2 lg:w-1/3 ${
                  sec.id === 3 && "flex lg:justify-end"
                }`}
                key={sec.id}
              >
                <div className="flex flex-col gap-2 max-w-[288px] min-h-[140px]">
                  <FooterTitle title={sec.title} />
                  {sec.content && (
                    <div className="flex flex-col gap-2">
                      {sec.content.map((content) => (
                        <FooterContent
                          text={content.text}
                          icon={content.icon}
                          key={content.id}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center w-full justify-between mt-10">
            {footerSectionTwo.map((sec) => (
              <div
                className={`md:w-1/2 lg:w-1/3 ${
                  sec.id === 3 && "flex lg:justify-end"
                }`}
                key={sec.id}
              >
                <div className="flex flex-col gap-2 max-w-[288px] min-h-[140px]">
                  <FooterTitle title={sec.title} />
                  {sec.content && (
                    <div className="flex flex-col gap-2">
                      {sec.content.map((content) => (
                        <FooterContent
                          text={content.text}
                          icon={content.icon}
                          key={content.id}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 px-6 sm:px-[60px] xl:px-[100px] flex items-center justify-center text-gray-900 font-light py-4 text-sm flex-wrap gap-2 md:justify-between">
          <p>
            Copyright {new Date().getFullYear()} USA Underwriters{" "}
            <span className="font-semibold">
              | Privacy Policy | Terms of Use
            </span>
          </p>
          <p>( Built by Neutrix - Powered by Neutrix Systems )</p>
        </div>
      </div>

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
