import Button from "./component/Button";
import Heading from "./component/Heading";
import HeroBackground from "./component/HeroBackground";
import HeroSplit from "./component/HeroSplit";
import Navigation from "./component/Navigation";
import P from "./component/P";

import whyCounselling from "./resources/images/why-counselling.jpg";
import counsellingForLifesTransitions from "./resources/images/counselling-for-lifes-transitions.jpg";
import aboutMe from "./resources/images/about-me.jpg";
import contactMe from "./resources/images/contact-me.jpg";
import ButtonView from "./component/ButtonView";
import Panel from "./component/Panel";


export default function Home() {
  return (
    <main>
      <Navigation />

      <HeroSplit image={whyCounselling} alt="Why Counselling?">
        <Heading
          className="!text-sm uppercase !text-sky-500 font-normal tracking-widest"
          level={1}
        >Sarah Fysh<br />Therapeutic Counselling</Heading>
        <Heading
          className="!text-5xl lg:!text-6xl"
          level={2}
        >Why Counselling?</Heading>
        <P>There are many reasons why people seek therapy, it might be that you need support whilst navigating a difficult life experience or that you are struggling to move forward after a past trauma. Maybe you are feeling lost or adrift and don&apos;t know why you are feeling the way you are. Sometimes heavy feelings can obscure healthy possibilities.</P>
        <P>I believe that good therapy is deeply collaborative and requires your sense of feeling safe and free from judgement as it does my compassion and training. Everyone approaches therapy with their own unique set of circumstances and expectations. Curiosity is a natural part of the process and so I remain open to discussing any questions you might have throughout our time together.</P>
        <a href="#contact">
          <ButtonView className="mt-8" variant="transparent">
            Speak to Sarah &rarr;
          </ButtonView>
        </a>
      </HeroSplit>

      <HeroBackground className="text-white [&_p]:!leading-normal" image={counsellingForLifesTransitions}>
        <div className="grid items-start md:grid-cols-2">
          <Heading
            className="!text-4xl md:!text-5xl lg:!text-6xl"
            level={2}
          >Counselling for<br />life&apos;s transitions</Heading>
          <div>
            <P>Over the course of a lifetime, a significant amount of change can be expected which can lead people to seek counselling. Even positive experiences and new opportunities can present their own set of unique stressors. Entering the different stages of life such as mid-life or young adulthood might leave a person feeling isolated or adrift.</P>
            <P>Other major life transitions might be unexpected and deeply unwanted such as bereavement, separation or  illness.</P>
            <P>Whilst there is not a fix for many of life&apos;s most difficult experiences, I believe it is possible to reduce the sense of isolation resulting from them and when a person feels less isolated there are more opportunities for healing and personal growth.</P>
            <P>Some of the areas that I have supported clients in: <em>Grief, loss and bereavement, Relationships difficulties and separation, Mid-life changes and menopause, Parenting and family issues, Loneliness, Anxiety and depression, Low self esteem and confidence, Procrastination and perfectionism. Neurodiversity, Eating disorders, OCD, Panic attacks and insomnia, abuse and bullying, work related issues: stress and redundancy, Sexuality and identity.</em></P>
          </div>
        </div>
      </HeroBackground>

      <HeroSplit variant="profile" image={aboutMe} alt="Sarah Fysh">
        <Heading
          className="!text-sm uppercase !text-sky-500 font-normal tracking-widest"
          level={2}
        >Hello, and welcome</Heading>
        <Heading
          className="!text-5xl lg:!text-6xl"
          level={3}
        >About me</Heading>
        <P>I am an experienced Integrative Counsellor who works with a wide range of issues and emotional difficulties. My style is warm and empathic using appropriate challenges to support change.</P>
        <P>For those interested in technical terms, my way of working is mostly influenced by humanistic therapy with a psychodynamic perspective. But mainly what I hope clients find in me is a &lsquo;real&rsquo; person.</P>
        <P>In addition to my private practise I work as a freelance student counsellor supporting young adults in higher education as they navigate their shift towards independence.</P>
        <P>I provide both remote and in person individual counselling. I don&apos;t believe there is one “right way”, only whether it facilitates growth, or not. Safety and trust are fundamental to my work. I am a member of the BACP, which means I follow their Ethical framework for Counselling practice.</P>
      </HeroSplit>

      <Panel title="Registered Member MBACP">
        <>
          <div>
            <h3>Membership number</h3>
            <p className="text-3xl">00964269</p>
          </div>
          <div>
            <h3>Register number</h3>
            <p className="text-3xl">397908</p>
          </div>
        </>
      </Panel>

      <HeroSplit className="flex-col [&_>_div]:!flex-col [&_>_div]:lg:!flex-row" variant="profile" image={contactMe} alt="Sarah Fysh">
        <Heading
          className="!text-4xl md:!text-5xl lg:!text-6xl"
          level={2}
        >Practicalities</Heading>
        <Heading level={3} className="mt-8">Session one</Heading>
        <P>During our first session, whether it is online or face-to-face, we will have a conversation about your current circumstances, including how you are doing emotionally and physically. We will explore your concerns and goals in greater depth, and this assessment will inform how we can best work together to address your needs.</P>
        <Heading level={3} className="mt-8">Format</Heading>
        <P className="mt-2">I am currently offering Face to face sessions and remote sessions - by telephone and online via Google Meet</P>
        <Heading level={3}>Fees</Heading>
        <P className="mt-2">Sessions are 50 mins. For an in person session the cost is: £75, I offer a slightly reduced rate for online sessions please enquire for availability. Fees are payable by bank transfer on the same day as the session. Some concessions available.</P>
        <Heading level={3}>Missed sessions</Heading>
        <P className="mt-2">I require a minimum of 24 hours notice to cancel a session, otherwise the full fee is due.</P>
        <Heading level={3}>Availability</Heading>
        <P className="mt-2">I work weekday and evenings online, I have some inperson slots available in both NW6 and W4 please enquire for current availability.</P>
        <Heading level={3}>Privacy & confidentiality</Heading>
        <P className="mt-2">My contract outlines how I maintain client privacy and confidentiality including data protection (GDPR).</P>
      </HeroSplit>

      <section id="contact">
        <Panel title="Contact me" variant="cols-3">
          <>
            <div>
              <h3>Email</h3>
              <p className="text-2xl"><a href="mailto:counsellingsjfs@gmail.com">counsellingsjfs@gmail.com</a></p>
            </div>
            <div>
              <h3>Location</h3>
              <p className="text-2xl">Kensal Rise, 5 mins from the London Overground station</p>
            </div>
          </>
        </Panel>
      </section>
    </main>
  )
}
