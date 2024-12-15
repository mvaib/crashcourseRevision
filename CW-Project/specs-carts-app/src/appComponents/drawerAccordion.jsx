import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
  } from "@/components/ui/accordion"
  
  const DrawerAccordion = () => {
    return (
      <AccordionRoot multiple defaultValue={[]}>
        {items.map((item, index) => (
          <AccordionItem key={index} value={item.value} className="accordion-item">
            <AccordionItemTrigger className="accordion-title">{item.title}</AccordionItemTrigger>
            {item.texts && item.texts.map((text, index) =>(
                <AccordionItemContent className="accordion-content" key={index}>{text}</AccordionItemContent>
            ))}
          </AccordionItem>
        ))}
      </AccordionRoot>
    )
  }
  
  const items = [
    { value: "a", title: "Shop Eyeglasses", texts : ["Sunglasses", "LensKart BLU lenses","Computer Glasses"] },
    { value: "b", title: "Shop Sunglasses", texts: ["All Sunglasses", "Power SunGlasses","Aviators","Polarized SunGlasses"] },
    { value: "c", title: "Shop Contact lenses", texts: ["Color Contact lenses", "Daytime Contact lenses","Nighttime Contact lenses", "Yearly","Daily"] },
  ]
  

export default DrawerAccordion