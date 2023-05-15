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
      <Navigation/>
      
      <HeroSplit image={whyCounselling} alt="Why Counselling?">
        <Heading
          className="!text-sm uppercase !text-sky-500 font-normal tracking-widest"
          level={1}
        >Sarah Fysh<br/>Therapeutic Counselling</Heading>
        <Heading
          className="!text-5xl lg:!text-6xl"
          level={2}
        >Why Counselling?</Heading>
        <P>
          For the most part we seek therapy in order to decrease our suffering.
          My commitment is to support you in achieving this goal.
          I believe that good therapy is deeply collaborative and requires your sense of being safe and free from judgement as much as it does my compassion and training.
        </P>
        <a href="#contact">
          <ButtonView className="mt-8" variant="transparent">
            Speak to Sarah &rarr;
          </ButtonView>
        </a>
      </HeroSplit>
      
      <HeroBackground className="text-white [&_p]:!leading-normal" image={counsellingForLifesTransitions}>
        <div className="grid items-end md:grid-cols-2">
          <Heading
            className="!text-4xl md:!text-5xl lg:!text-6xl"
            level={2}
            >Counselling for<br/>life’s transitions</Heading>
          <div>
            <P>Over the course of a lifetime, a significant amount of change can be expected which can lead people to seek counselling. Even positive changes like new jobs or parenthood can be accompanied by their own unique stressors.  Entering  the different stages of life such as mid-life or retirement might leave a person feeling isolated or adrift.</P>
            <P>Other major life transitions might be  unexpected and deeply unwanted such as bereavement, separation or  illness.</P>
            <P>I believe that changes, even difficult changes, can be worked through and can even influence personal growth.</P>
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
        <P>I am a warm and intuitive Therapeutic Counsellor, my approach is Integrative which means  I draw on various therapeutic practices to support you as an individual. For those interested in technical terms, my way of working is mostly influenced by person centred (humanistic) therapy with a psychodynamic perspective. But mainly what I hope clients find in me is a ‘real’ person.</P>
        <P>I provide both remote and in person individual counselling. Safety and trust are fundamental to  my work. I am a member of the BACP, which means I follow their Ethical framework for Counselling practice. </P>
      </HeroSplit>

      <Panel>
          <>
            <div>
              <h3>Membership category</h3>
              <p className="text-3xl">Registered Member MBACP</p>
            </div>
            <div>
              <h3>Membership number</h3>
              <p className="text-3xl">00964269</p>
            </div>
            <div>
              <h3>Register number</h3>
              <p className="text-3xl">397908</p>
            </div>
            <div>
              <h3>Expiry date</h3>
              <p className="text-3xl">22nd March 2024</p>
            </div>
          </>
      </Panel>

      <HeroSplit className="flex-col [&_>_div]:!flex-col [&_>_div]:lg:!flex-row" variant="profile" image={contactMe} alt="Sarah Fysh">
        <Heading
          className="!text-4xl md:!text-5xl lg:!text-6xl"
          level={2}
          >Practicalities</Heading>
        <Heading level={3} className="mt-8">Format</Heading>
        <P className="mt-2">I am currently offering Face to face sessions and remote sessions - by telephone and online via Google Meet</P>
        <Heading level={3}>Fees</Heading>
        <P className="mt-2">Sessions are 50 mins, in person sessions are £55 per session and Online or telephone are £45 per session and payable by bank transfer on the same day as the session.</P>
        <Heading level={3}>Missed sessions</Heading>
        <P className="mt-2">I require a minimum of 24 hours notice to cancel a session, otherwise the full fee is due.</P>
        <Heading level={3}>Availability</Heading>
        <P className="mt-2">Weekday mornings for in person and afternoon and evenings for online.</P>
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
              <h3>Telephone</h3>
              <p className="text-2xl"><a href="tel:00447866701340">07866701340</a></p>
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
