import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { mobileFooterOne, mobileFooterTwo } from "@/constance/footer-content";
import FooterContent from "./FooterContent";

export default function AccordionFooter() {
  return (
    <>
      <div>
        {mobileFooterOne.map((sec) => (
          <Accordion key={sec.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {sec.title}
            </AccordionSummary>
            {sec.content && (
              <AccordionDetails>
                {sec.content.map((content) => (
                  <FooterContent text={content.text} key={content.id} />
                ))}
              </AccordionDetails>
            )}
          </Accordion>
        ))}
      </div>
      <div className="mt-6">
        {mobileFooterTwo.map((sec) => (
          <Accordion key={sec.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {sec.title}
            </AccordionSummary>
            {sec.content && (
              <AccordionDetails>
                {sec.content.map((content) => (
                  <FooterContent text={content.text} key={content.id} />
                ))}
              </AccordionDetails>
            )}
          </Accordion>
        ))}
      </div>
    </>
  );
}
