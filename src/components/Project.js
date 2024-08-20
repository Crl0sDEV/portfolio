import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Project = ({ title, description, technologies, features, challenges, outcome, links }) => {
  return (
    <div className="max-w-sm mx-4 my-4 p-6 bg-white rounded-lg shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Technologies Used
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="list-disc list-inside text-sm">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Features
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul className="list-disc list-inside text-sm">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Challenges
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-sm">{challenges}</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Outcome
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-sm">{outcome}</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <div className="mt-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;