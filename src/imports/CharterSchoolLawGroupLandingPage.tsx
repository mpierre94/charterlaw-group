import svgPaths from "./svg-3hbkm1uhoh";
import imgImageCharterSchoolLawGroup from "figma:asset/6e5c20423e92cfd172854e65ffa814134e060e3c.png";
import imgHeroNew from "figma:asset/f62c519fb12c975f43c02b626fcf1ea03e3aa0bd.png";
import imgImageAnthonyCurry from "figma:asset/e33981847bfe134c927fb5e761547f03088bc9f8.png";
import imgImageCharterSchoolLawGroup1 from "figma:asset/214c4b1e3b9c22b1a88e456a587692ec11a3225e.png";

function ImageCharterSchoolLawGroup() {
  return (
    <div className="h-[57px] relative shrink-0 w-[176.125px]" data-name="Image (Charter School Law Group)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageCharterSchoolLawGroup} />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[48px] relative shrink-0 w-[139.125px]" data-name="Logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-[139.125px]">
        <ImageCharterSchoolLawGroup />
      </div>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#2b9e8c] h-[2px] left-0 top-[26px] w-0" data-name="Text" />;
}

function Link() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[45.125px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">About</p>
      <Text />
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-[#2b9e8c] h-[2px] left-0 top-[26px] w-0" data-name="Text" />;
}

function Link1() {
  return (
    <div className="absolute h-[24px] left-[77.13px] top-0 w-[65.648px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Services</p>
      <Text1 />
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-[#2b9e8c] h-[2px] left-0 top-[26px] w-0" data-name="Text" />;
}

function Link2() {
  return (
    <div className="absolute h-[24px] left-[174.77px] top-0 w-[64.367px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Attorney</p>
      <Text2 />
    </div>
  );
}

function Text3() {
  return <div className="absolute bg-[#2b9e8c] h-[2px] left-0 top-[26px] w-0" data-name="Text" />;
}

function Link3() {
  return (
    <div className="absolute h-[24px] left-[271.14px] top-0 w-[59.406px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Contact</p>
      <Text3 />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e2b354] h-[40px] relative rounded-[1.67772e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[210.805px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[24px] py-[20px] relative w-[210.805px]">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1f2a44] text-[14px] text-nowrap whitespace-pre">Schedule a Consultation</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[601px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[40px] items-center relative w-[601px]">
        <Container />
        <Button />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex h-[96px] items-center justify-between relative shrink-0 w-full" data-name="Navigation">
      <Logo />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-0 px-[52px] py-[20px] top-[0.5px] w-[1320px]" data-name="Container">
      <Navigation />
    </div>
  );
}

function HeroNew() {
  return (
    <div className="bg-[rgba(226,179,84,0.63)] h-[38px] relative rounded-[1.67772e+07px] shrink-0 w-[374.078px]" data-name="HeroNew">
      <div aria-hidden="true" className="absolute border border-[rgba(43,158,140,0.4)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[17px] not-italic text-[14px] text-nowrap text-white top-[9.5px] tracking-[0.35px] uppercase whitespace-pre">Built for Schools. Focused on Students.</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[210px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Libre_Baskerville:Bold',_sans-serif] leading-[70px] left-[288px] not-italic text-[56px] text-center text-white top-[-1px] tracking-[-1.12px] translate-x-[-50%] w-[576px]">Legal Services for Charter Schools You Can Trust</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32.5px] left-[279px] not-italic text-[20px] text-[rgba(255,255,255,0.9)] text-center top-[-1px] translate-x-[-50%] w-[558px]">Proactive, affordable, and education-focused legal support for Nevada charter schools.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e2b354] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[24px] relative rounded-[1.67772e+07px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-[226.805px]" data-name="Button">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1f2a44] text-[14px] text-nowrap whitespace-pre">Schedule a Consultation</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[52px] items-center justify-center px-[33px] py-[25px] relative rounded-[1.67772e+07px] shrink-0 w-[144.578px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1f2a44] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#1f2a44] text-[14px] text-nowrap whitespace-pre">Learn More</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function HeroNew1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[140.93px]" data-name="HeroNew">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.5px] tracking-[0.35px] whitespace-pre">Scroll to Learn More</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Button">
      <HeroNew1 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[34px] items-center justify-center left-1/2 px-[316px] py-0 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[1216px]" data-name="Container">
      <HeroNew />
      <Heading1 />
      <Paragraph />
      <Container3 />
      <Button3 />
    </div>
  );
}

function HeroNew2() {
  return (
    <div className="h-[841px] overflow-clip relative shrink-0 w-full" data-name="HeroNew">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-gradient-to-b from-[rgba(31,78,121,0.95)] inset-0 to-[rgba(59,110,163,0.95)]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-25 size-full" src={imgHeroNew} />
      </div>
      <Container2 />
      <Container5 />
    </div>
  );
}

function ServicesNew() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="ServicesNew">
      <p className="absolute font-['Libre_Baskerville:Bold',_sans-serif] leading-[50px] left-[384.49px] not-italic text-[#1f2a44] text-[40px] text-center top-0 tracking-[-0.4px] translate-x-[-50%] w-[641px]">{`Legal Services Tailored to Your School's Stage`}</p>
    </div>
  );
}

function ServicesNew1() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="ServicesNew">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32.5px] left-[384.16px] not-italic text-[20px] text-[rgba(31,42,68,0.7)] text-center top-[-1px] translate-x-[-50%] w-[748px]">Charter schools have different needs at different stages. We offer three service packages designed to match where you are in your journey.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[189px] items-start left-[276px] top-[127.5px] w-[768px]" data-name="Container">
      <ServicesNew />
      <ServicesNew1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3da2a680} id="Vector" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p31e85700} id="Vector_2" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3b4b8cc0} id="Vector_3" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2f8d9f80} id="Vector_4" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.08)] content-stretch flex items-center justify-center left-0 rounded-[16px] size-[64px] top-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[20px] left-0 top-[80px] w-[332px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#76b3e1] text-[14px] text-nowrap top-[0.5px] tracking-[0.35px] uppercase whitespace-pre">Before Authorization</p>
    </div>
  );
}

function ServicesNew2() {
  return (
    <div className="[grid-area:1_/_1] h-[108px] relative shrink-0" data-name="ServicesNew">
      <Container7 />
      <Container8 />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="[grid-area:2_/_1] h-[32px] relative shrink-0" data-name="CardTitle">
      <p className="absolute font-['Libre_Baskerville:Bold',_sans-serif] leading-[32px] left-0 not-italic text-[#1f2a44] text-[24px] text-nowrap top-0 whitespace-pre">Pre-Launch Readiness</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="[grid-area:3_/_1] relative shrink-0" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[26px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] top-[-1px] w-[320px]">Navigate the charter application process and build compliant foundational policies, bylaws, and governance structures before you open your doors.</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[380px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[132px_44px_minmax(0px,_1fr)] h-full p-[24px] relative w-[380px]">
        <ServicesNew2 />
        <CardTitle />
        <CardDescription />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[207.203px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">Charter application support</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container10 />
      <Text4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[185.758px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">Board governance setup</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container12 />
      <Text5 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[147.914px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">Policy development</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container14 />
      <Text6 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[161.336px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">Compliance roadmap</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container16 />
      <Text7 />
    </div>
  );
}

function ServicesNew3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="ServicesNew">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[304px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[36px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#76b3e1] text-[14px] text-nowrap top-[8.5px] whitespace-pre">Learn More</p>
      <Icon2 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[216px] relative shrink-0 w-[380px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[216px] items-start px-[24px] py-0 relative w-[380px]">
        <ServicesNew3 />
        <Button4 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col gap-[24px] items-start p-[2px] relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(31,42,68,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader />
      <CardContent />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p18cb7e80} id="Vector" stroke="var(--stroke-0, #1F2A44)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p26c56780} id="Vector_2" stroke="var(--stroke-0, #1F2A44)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(31,42,68,0.08)] content-stretch flex items-center justify-center left-0 rounded-[16px] size-[64px] top-0" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[20px] left-0 top-[80px] w-[332px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#76b3e1] text-[14px] text-nowrap top-[0.5px] tracking-[0.35px] uppercase whitespace-pre">Years 1–4</p>
    </div>
  );
}

function ServicesNew4() {
  return (
    <div className="[grid-area:1_/_1] h-[108px] relative shrink-0" data-name="ServicesNew">
      <Container17 />
      <Container18 />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="[grid-area:2_/_1] h-[32px] relative shrink-0" data-name="CardTitle">
      <p className="absolute font-['Libre_Baskerville:Bold',_sans-serif] leading-[32px] left-0 not-italic text-[#1f2a44] text-[24px] text-nowrap top-0 whitespace-pre">Early-Phase Support</p>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="[grid-area:3_/_1] relative shrink-0" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[26px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] top-[-1px] w-[317px]">Establish sustainable systems during your critical first years. From hiring to special education compliance, we help you build the right way.</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[380px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[132px_44px_minmax(0px,_1fr)] h-full p-[24px] relative w-[380px]">
        <ServicesNew4 />
        <CardTitle1 />
        <CardDescription1 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[272.414px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">{`Employment contracts & handbooks`}</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container20 />
      <Text8 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[215.781px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">IEP and Section 504 support</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container22 />
      <Text9 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[278.023px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">{`Board training & meeting compliance`}</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container24 />
      <Text10 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container25 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[176px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">Vendor contract review</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container26 />
      <Text11 />
    </div>
  );
}

function ServicesNew5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="ServicesNew">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[304px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[36px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#76b3e1] text-[14px] text-nowrap top-[8.5px] whitespace-pre">Learn More</p>
      <Icon4 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="h-[216px] relative shrink-0 w-[380px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[216px] items-start px-[24px] py-0 relative w-[380px]">
        <ServicesNew5 />
        <Button5 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-white box-border content-stretch flex flex-col gap-[24px] items-start p-[2px] relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(31,42,68,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader1 />
      <CardContent1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pae2ff80} id="Vector" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.08)] content-stretch flex items-center justify-center left-0 rounded-[16px] size-[64px] top-0" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[20px] left-0 top-[80px] w-[332px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#76b3e1] text-[14px] text-nowrap top-[0.5px] tracking-[0.35px] uppercase whitespace-pre">Year 4+</p>
    </div>
  );
}

function ServicesNew6() {
  return (
    <div className="[grid-area:1_/_1] h-[108px] relative shrink-0" data-name="ServicesNew">
      <Container27 />
      <Container28 />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="[grid-area:2_/_1] h-[32px] relative shrink-0" data-name="CardTitle">
      <p className="absolute font-['Libre_Baskerville:Bold',_sans-serif] leading-[32px] left-0 not-italic text-[#1f2a44] text-[24px] text-nowrap top-0 whitespace-pre">Sustainability Services</p>
    </div>
  );
}

function CardDescription2() {
  return (
    <div className="[grid-area:3_/_1] relative shrink-0" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[26px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] top-[-1px] w-[300px]">Ongoing legal partnership to support growth, risk management, and strategic planning as your school scales and matures.</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[380px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[132px_44px_minmax(0px,_1fr)] h-full p-[24px] relative w-[380px]">
        <ServicesNew6 />
        <CardTitle2 />
        <CardDescription2 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[194.109px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">Annual compliance audits</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container30 />
      <Text12 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[186.703px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">{`Policy updates & training`}</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container32 />
      <Text13 />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container33 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[223.516px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">{`Expansion & facilities counsel`}</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container34 />
      <Text14 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#76b3e1] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[rgba(43,158,140,0.1)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="Container">
      <Container35 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[188.906px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap top-[-1px] whitespace-pre">Risk mitigation strategies</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container36 />
      <Text15 />
    </div>
  );
}

function ServicesNew7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="ServicesNew">
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[304px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[36px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#76b3e1] text-[14px] text-nowrap top-[8.5px] whitespace-pre">Learn More</p>
      <Icon6 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="h-[216px] relative shrink-0 w-[380px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[216px] items-start px-[24px] py-0 relative w-[380px]">
        <ServicesNew7 />
        <Button6 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] bg-white box-border content-stretch flex flex-col gap-[24px] items-start p-[2px] relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(31,42,68,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardHeader2 />
      <CardContent2 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[584px] left-[52px] top-[396.5px] w-[1216px]" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-start left-[641.4px] top-[3px] w-[285.328px]" data-name="Link">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#76b3e1] text-[18px] text-center text-nowrap whitespace-pre">{`Let's talk about a custom solution`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[28px] left-[52px] top-[1044.5px] w-[1216px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[465.77px] not-italic text-[18px] text-[rgba(31,42,68,0.7)] text-center top-0 translate-x-[-50%] w-[353px]">Not sure which package fits your needs?</p>
      <Link4 />
    </div>
  );
}

function ServicesNew8() {
  return (
    <div className="bg-white h-[1201px] relative shrink-0 w-full" data-name="ServicesNew">
      <Container6 />
      <Container37 />
      <Paragraph1 />
    </div>
  );
}

function AttorneySection() {
  return (
    <div className="content-stretch flex h-[50px] items-start relative shrink-0 w-full" data-name="AttorneySection">
      <p className="basis-0 font-['Libre_Baskerville:Bold',_sans-serif] grow leading-[50px] min-h-px min-w-px not-italic relative shrink-0 text-[#1f2a44] text-[40px] text-center tracking-[-0.4px]">Meet Anthony Curry</p>
    </div>
  );
}

function AttorneySection1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="AttorneySection">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[608.58px] not-italic text-[20px] text-[rgba(31,42,68,0.7)] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">{`Founder & Managing Attorney`}</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[94px] items-start relative shrink-0 w-full" data-name="Container">
      <AttorneySection />
      <AttorneySection1 />
    </div>
  );
}

function ImageAnthonyCurry() {
  return (
    <div className="h-[650.422px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Image (Anthony Curry)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageAnthonyCurry} />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[400px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] text-nowrap top-[0.5px] whitespace-pre">Email</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[26px] w-[242.922px]" data-name="Link">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1f4e79] text-[16px] text-nowrap whitespace-pre">anthony@charterschoollaw.com</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Link5 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[400px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] text-nowrap top-[0.5px] whitespace-pre">Phone</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[26px] w-[106.93px]" data-name="Link">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1f4e79] text-[16px] text-nowrap whitespace-pre">702-523-7531</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Link6 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[108px] items-start relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white h-[156px] relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[156px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[838.422px] items-start left-0 top-[-0.5px] w-[448px]" data-name="Container">
      <ImageAnthonyCurry />
      <Container44 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[24px] size-[40px] top-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p14a93580} id="Vector" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="3.33333" />
          <path d={svgPaths.p21cc2000} id="Vector_2" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',_sans-serif] font-normal italic leading-[39px] left-0 text-[#1f2a44] text-[24px] top-[-0.5px] w-[590px]">{`I started this firm because charter schools deserve legal counsel that understands their unique mission. We help schools focus on students, not compliance anxiety."`}</p>
    </div>
  );
}

function Quote() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[32px] pl-[32px] pr-0 py-0 top-[32px] w-[640px]" data-name="Quote">
      <Paragraph2 />
    </div>
  );
}

function AttorneySection2() {
  return (
    <div className="bg-white h-[220px] relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="AttorneySection">
      <Icon7 />
      <Quote />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[117px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[18px] text-[rgba(31,42,68,0.7)] top-[0.5px] w-[688px]">Anthony Curry founded Charter School Law Group after years of witnessing charter schools struggle to find affordable, education-focused legal support. Too many schools were either paying premium rates for general practice attorneys or going without proper legal guidance altogether.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[117px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[18px] text-[rgba(31,42,68,0.7)] top-[0.5px] w-[696px]">With deep expertise in Nevada education law and a passion for the charter school movement, Anthony built a practice dedicated exclusively to serving charter schools at every stage—from pre-authorization planning through sustainable growth.</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[117px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[18px] text-[rgba(31,42,68,0.7)] top-[0.5px] w-[704px]">His approach is simple: proactive prevention, transparent pricing, and practical solutions that respect both legal requirements and the realities of running a school. Every engagement is designed to empower school leaders, not create dependency.</p>
    </div>
  );
}

function AttorneySection3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[399px] items-start relative shrink-0 w-full" data-name="AttorneySection">
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pe2b6600} id="Vector" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p59aa3b2} id="Vector_2" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M7 21H17" id="Vector_3" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 3V21" id="Vector_4" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p6dc2e80} id="Vector_5" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[rgba(43,158,140,0.1)] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f2a44] text-[16px] text-nowrap top-[-1px] whitespace-pre">Education Law</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] text-nowrap top-[0.5px] whitespace-pre">Specialization</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-[170.938px]" data-name="Container">
      <Container46 />
      <Container49 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 7V21" id="Vector" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p38e00000} id="Vector_2" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[rgba(43,158,140,0.1)] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f2a44] text-[16px] text-nowrap top-[-1px] whitespace-pre">Governance</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] text-nowrap top-[0.5px] whitespace-pre">{`Board & Policy`}</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-[155.695px]" data-name="Container">
      <Container51 />
      <Container54 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p35edaa00} id="Vector" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1d654800} id="Vector_2" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 3L22 14H20" id="Vector_3" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1021cb40} id="Vector_4" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 4H11" id="Vector_5" stroke="var(--stroke-0, #76B3E1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[rgba(43,158,140,0.1)] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon10 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f2a44] text-[16px] text-nowrap top-[-1px] whitespace-pre">Compliance</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] text-nowrap top-[0.5px] whitespace-pre">Proactive Support</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0 w-[178.906px]" data-name="Container">
      <Container56 />
      <Container59 />
    </div>
  );
}

function AttorneySection4() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full" data-name="AttorneySection">
      <Container50 />
      <Container55 />
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[512px] top-[-0.5px] w-[704px]" data-name="Container">
      <AttorneySection2 />
      <AttorneySection3 />
      <AttorneySection4 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[838.422px] relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container61 />
    </div>
  );
}

function AttorneySection5() {
  return (
    <div className="bg-[#f7f4ee] h-[1268.42px] relative shrink-0 w-full" data-name="AttorneySection">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] h-[1268.42px] items-start pb-0 pt-[128px] px-[52px] relative w-full">
          <Container38 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return <div className="absolute bg-white blur-3xl filter left-[936px] rounded-[1.67772e+07px] size-[384px] top-0" data-name="Container" />;
}

function Container64() {
  return <div className="absolute bg-white blur-3xl filter left-0 rounded-[1.67772e+07px] size-[384px] top-[409.5px]" data-name="Container" />;
}

function Container65() {
  return (
    <div className="absolute h-[793.5px] left-0 opacity-5 top-[-0.5px] w-[1320px]" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d="M13.3333 3.33333V10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M26.6667 3.33333V10" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p36a93880} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M5 16.6667H35" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-[376px] rounded-[1.67772e+07px] size-[80px] top-0" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[100px] left-0 top-[112px] w-[832px]" data-name="Heading 2">
      <p className="absolute font-['Libre_Baskerville:Bold',_sans-serif] leading-[50px] left-[416.12px] not-italic text-[40px] text-center text-white top-0 tracking-[-0.4px] translate-x-[-50%] w-[830px]">{`Ready to Strengthen Your School's Legal Foundation?`}</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[97.5px] left-[80px] top-[244px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32.5px] left-[336.05px] not-italic text-[20px] text-[rgba(255,255,255,0.9)] text-center top-[-1px] translate-x-[-50%] w-[663px]">{`Schedule a complimentary 30-minute consultation to discuss your school's needs and learn how we can help you stay compliant, reduce risk, and focus on student success.`}</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[241.31px] size-[16px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #1F2A44)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #1F2A44)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#e2b354] h-[56px] left-[279.34px] rounded-[1.67772e+07px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[397.5px] w-[273.312px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[28px] left-[16px] not-italic text-[#1f2a44] text-[18px] text-nowrap top-[14px] whitespace-pre">Schedule a Consultation</p>
      <Icon12 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[20px] left-0 top-[517.5px] w-[832px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[416.46px] not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">No obligation · Confidential · Nevada Bar Certified</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[537.5px] left-[244px] top-[127.5px] w-[832px]" data-name="Container">
      <Container66 />
      <Heading2 />
      <Paragraph6 />
      <Button7 />
      <Paragraph7 />
    </div>
  );
}

function CtaNew() {
  return (
    <div className="bg-gradient-to-b from-[rgba(31,78,121,0.9)] h-[793.5px] overflow-clip relative shrink-0 to-[rgba(59,110,163,0.9)] w-full" data-name="CTANew">
      <Container65 />
      <Container67 />
    </div>
  );
}

function ImageCharterSchoolLawGroup1() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[139.125px]" data-name="Image (Charter School Law Group)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageCharterSchoolLawGroup1} />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[52px] left-0 top-[72px] w-[373.328px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[26px] left-0 not-italic text-[16px] text-[rgba(31,42,68,0.7)] top-[-1px] w-[343px]">Proactive, affordable, and education-focused legal services for Nevada charter schools.</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[277.797px] left-0 top-[-0.5px] w-[373.328px]" data-name="Container">
      <ImageCharterSchoolLawGroup1 />
      <Paragraph8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[37.797px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Libre_Baskerville:Bold',_sans-serif] leading-[37.8px] left-0 not-italic text-[#1f2a44] text-[28px] text-nowrap top-[-0.5px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[2px] w-[45.125px]" data-name="Link">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[2px] w-[65.648px]" data-name="Link">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap whitespace-pre">Services</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[2px] w-[135.734px]" data-name="Link">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap whitespace-pre">Meet the Attorney</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start left-0 top-[2px] w-[59.406px]" data-name="Link">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(31,42,68,0.7)] text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[277.797px] items-start left-[421.33px] top-[-0.5px] w-[373.336px]" data-name="Container">
      <Heading3 />
      <List />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[37.797px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Libre_Baskerville:Bold',_sans-serif] leading-[37.8px] left-0 not-italic text-[#1f2a44] text-[28px] text-nowrap top-[-0.5px] whitespace-pre">Contact</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_355)" id="Icon">
          <path d={svgPaths.p24c7c480} id="Vector" stroke="var(--stroke-0, #1F4E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_355">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] text-nowrap top-[0.5px] whitespace-pre">Phone</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex h-[19.5px] items-start relative shrink-0 w-full" data-name="Link">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1f2a44] text-[16px] text-nowrap whitespace-pre">702-523-7531</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[48px] items-start left-[32px] top-0 w-[106.93px]" data-name="Container">
      <Container70 />
      <Link11 />
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Icon13 />
      <Container71 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, #1F4E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, #1F4E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] text-nowrap top-[0.5px] whitespace-pre">Email</p>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex h-[19.5px] items-start relative shrink-0 w-full" data-name="Link">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1f2a44] text-[16px] text-nowrap whitespace-pre">anthony@charterschoollaw.com</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] h-[48px] items-start left-[32px] top-0 w-[242.922px]" data-name="Container">
      <Container72 />
      <Link12 />
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Icon14 />
      <Container73 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #1F4E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #1F4E79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] text-nowrap top-[0.5px] whitespace-pre">Address</p>
    </div>
  );
}

function LineBreak() {
  return <div className="absolute h-[19.5px] left-[176.79px] top-[2px] w-0" data-name="Line Break" />;
}

function LineBreak1() {
  return <div className="absolute h-[19.5px] left-[88.34px] top-[26px] w-0" data-name="Line Break" />;
}

function Address() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Address">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f2a44] text-[16px] text-nowrap top-[-1px] whitespace-pre">1930 Village Center Cir.</p>
      <LineBreak />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f2a44] text-[16px] text-nowrap top-[23px] whitespace-pre">Suite 3-253</p>
      <LineBreak1 />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1f2a44] text-[16px] text-nowrap top-[47px] whitespace-pre">Las Vegas, NV 89134</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[96px] items-start left-[32px] top-0 w-[176.789px]" data-name="Container">
      <Container74 />
      <Address />
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="List Item">
      <Icon15 />
      <Container75 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[224px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem16 />
      <ListItem17 />
      <ListItem18 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[277.797px] items-start left-[842.66px] top-[-0.5px] w-[373.336px]" data-name="Container">
      <Heading4 />
      <List1 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[277.797px] relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container69 />
      <Container76 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[362.227px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[362.227px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] top-0 w-[363px]">© 2025 Charter School Law Group. All rights reserved.</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[92.57px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[92.57px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] text-nowrap top-0 whitespace-pre">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] text-nowrap top-0 whitespace-pre">Terms of Service</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69.227px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[69.227px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(31,42,68,0.6)] text-nowrap top-0 whitespace-pre">Disclaimer</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[20px] relative shrink-0 w-[322.555px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-[20px] items-start relative w-[322.555px]">
        <Link13 />
        <Link14 />
        <Link15 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph9 />
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="box-border content-stretch flex flex-col h-[53px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(31,42,68,0.1)] border-solid inset-0 pointer-events-none" />
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[506.797px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[506.797px] items-start pb-0 pt-[64px] px-[32px] relative w-full">
          <Container77 />
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function FooterNew() {
  return (
    <div className="bg-[#f7f4ee] h-[507.797px] relative shrink-0 w-full" data-name="FooterNew">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(31,42,68,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[507.797px] items-start pb-0 pt-px px-[20px] relative w-full">
          <Container81 />
        </div>
      </div>
    </div>
  );
}

export default function CharterSchoolLawGroupLandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Charter School Law Group Landing Page">
      <HeroNew2 />
      <ServicesNew8 />
      <AttorneySection5 />
      <CtaNew />
      <FooterNew />
    </div>
  );
}