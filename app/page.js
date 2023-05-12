import Button from "./component/Button";
import Heading from "./component/Heading";
import Hero from "./component/Hero";
import Image from "next/image";
import Navigation from "./component/Navigation";

import whyCounselling from "./resources/images/why-counselling.jpg";
import counsellingForLifesTransitions from "./resources/images/counselling-for-lifes-transitions.jpg";

export default function Home() {
  return (
    <main>
      <Navigation variant="-opaque"/>
      
      <Hero image={whyCounselling}>
        <Heading level={2}>Why Counselling?</Heading>
        <p className="mt-4 font-light leading-loose">
          For the most part we seek therapy in order to decrease our suffering. My commitment is to support you in achieving this goal. I believe that good therapy is deeply collaborative and  requires your sense of being safe and free from judgement as much as it does my compassion and training.
        </p>
        <Button className="mt-8 whitespace-nowrap">
          Speak to Sarah &rarr;
        </Button>
      </Hero>

      <section className="mt-12 [&_p]:mt-4">
        <Heading level={2}>Counselling for life’s transitions</Heading>
        <Image alt="Why Counselling?" className="object-cover object-center w-full h-full" src={counsellingForLifesTransitions} />
        <p>Over the course of a lifetime, a significant amount of change can be expected which can lead people to seek counselling. Even positive changes like new jobs or parenthood can be accompanied by their own unique stressors.  Entering  the different stages of life such as mid-life or retirement might leave a person feeling isolated or adrift.</p>
        <p>Other major life transitions might be  unexpected and deeply unwanted such as bereavement, separation or  illness.</p>
        <p>I believe that changes, even difficult changes, can be worked through and can even influence personal growth.</p>
      </section>

      <section className="mt-12 [&_p]:mt-4">
        <Heading level={2}>About me</Heading>
        <p>Hello and Welcome,</p>
        <p>I am a warm and intuitive Therapeutic Counsellor, my approach is Integrative which means  I draw on various therapeutic practices to support you as an individual. For those interested in technical terms, my way of working is mostly influenced by person centred (humanistic) therapy with a psychodynamic perspective. But mainly what I hope clients find in me is a ‘real’ person.</p>
        <p>I provide both remote and in person individual counselling. Safety and trust are fundamental to  my work. I am a member of the BACP, which means I follow their Ethical framework for Counselling practice. </p>
        <Heading level={4}>Sarah Fysh</Heading>
        <p>
          BACP Membership number: 00964269<br/>
          Membership category: Registered Member MBACP<br/>
          Expiry date: 22 March 2024<br/>
          Register number: 397908<br/>
        </p>
      </section>

      <section className="mt-12 [&_p]:mt-4">
        <Heading level={2}>Practicalities</Heading>
        <Heading level={4}>Format</Heading>
        <p>I am currently offering Face to face sessions and remote sessions -- by telephone and online via Google meets</p>
        <Heading level={4}>Fees</Heading>
        <p>Sessions are 50 mins, in person sessions are £55 per session and Online or telephone are £45 per session and payable by bank transfer on the same day as the session.</p>
        <Heading level={4}>Missed sessions</Heading>
        <p>I require a minimum of 24 hours notice to cancel a session, otherwise the full fee is due.</p>
        <Heading level={4}>Availability</Heading>
        <p>Weekday mornings for in person and afternoon and evenings for online.</p>
        <Heading level={4}>Privacy & confidentiality</Heading>
        <p>My contract outlines how I maintain client privacy and confidentiality including data protection (GDPR).</p>
      </section>

      <section className="mt-12 [&_p]:mt-4">
        <Heading level={2}>Contact me</Heading>
        <p>
          <strong>Sarah Fysh Counselling</strong><br/>
          Email: <a href="mailto:counsellingsjfs@gmail.com">counsellingsjfs@gmail.com</a><br/>
          Telephone: <a href="tel:00447866701340">07866701340</a><br/>
          Location: Kensal Rise, 5 mins from the London Overground station<br/>
        </p>
      </section>
    </main>
  )
}
