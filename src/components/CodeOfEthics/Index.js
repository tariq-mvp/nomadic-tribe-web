import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

export const Index = () => {
  return (
    <div className="code-of-ethics">
      <Container>
        <h1 className="policies-title" style={{ textAlign: "center" }}>
          The Nomadi Way
        </h1>
        <h6 style={{ textAlign: "center", marginTop: "15px" }}>
          This community belongs to all of us. It is your portal to another
          world. Life-changing journeys and extraordinary bonds. But on these
          journeys, we must look out for and protect each other. Together we
          will improve the quality of life for local communities, we will
          preserve cultural and natural heritage and we will make beautiful
          memories that will last a lifetime.
        </h6>
        <h6 style={{ textAlign: "center", marginTop: "15px" }}>
          The Nomadi Way is a guide for us and for you, to create an amazing and
          safe community together. Help us by upholding these laws, we promise
          to respond swiftly if ever there is someone who doesn’t.
        </h6>
        <div style={{ marginTop: "50px" }}>
            <h3 style={{ fontWeight: "600" }}>First law: Be respectful of each other</h3>
            <h6 style={{ marginTop: "10px" }}>Our tribe is made up of all different creeds. Everyone is welcome. And everyone must feel safe with us. Whether online or on a journey, we want to protect you and your right to express your unique experiences and personal points of view. Together, we’ll make our community forever positive.</h6>
            <h6 style={{ marginTop: "25px" }}>Look after each other when traveling, whether with friends or strangers. And look after each other online too. Our community guidelines help keep everyone safe online but are good rules to follow when meeting people in person too. They include making sure nothing you share contains...</h6>
            <ul>
                <li>
                    <h6 style={{ marginTop: "10px" }}>
                        <strong>Abuse:</strong> Bullying, insulting, threatening, intimidating, humiliating, harming, etc.
                    </h6>
                </li>
                <li>
                    <h6 style={{ marginTop: "10px" }}>
                        <strong>Harassment:</strong> Unwanted sexual advances, targeted annoyance, inconvenience, anxiety, etc.
                    </h6>
                </li>
                <li>
                    <h6 style={{ marginTop: "10px" }}>
                        <strong>Hate:</strong> Discriminating or promoting discrimination on the basis of race, gender, religion, nationtionality, disability, sexual orientation, age, etc.
                    </h6>
                </li>
                <li>
                    <h6 style={{ marginTop: "10px" }}>
                        <strong>Violence:</strong> Threatening physical harm, hoping for harm to occur, inciting others to cause harm, etc.
                    </h6>
                </li>
            </ul>
            <h6 style={{ marginTop: "20px" }}>
                <Link href={"/community-standards"}>View our full Community Standards here</Link>
            </h6>
        </div>
        <div style={{ marginTop: "50px" }}>
            <h3 style={{ fontWeight: "600" }}>Second law: Be respectful of the indigenous hosts</h3>
            <h6 style={{ marginTop: "10px" }}>They are opening their lives to us. Some parts of those lives will be unfamiliar and seem strange. But their respect for us and their hospitality must be repaid in kind. Otherwise we don’t deserve the privilege. And we will lose it.</h6>
            <h6 style={{ marginTop: "25px" }}>Before you visit any tribe, we will always give you advice on their specific customs, expectations, religion, lifestyle and anything else you need to know. But in every case, you should never...</h6>
            <ul>
                <li>
                    <h6 style={{ marginTop: "10px" }}>
                    Endanger or exploit: Many tribes are facing a challenge to survive as it is. Your presence is meant to help, not harm.
                    </h6>
                </li>
                <li>
                    <h6 style={{ marginTop: "10px" }}>
                    Treat people as a tourist attraction: You are not there to gawk and gasp. You shouldn’t talk about people as if they’re not there. And you should never take photos of people or their property without first asking their permission.
                    </h6>
                </li>
            </ul>
            <h6 style={{ marginTop: "20px" }}>
            You should try to...
            </h6>
            <ul>
                <li>
                    <h6 style={{ marginTop: "10px" }}>
                    Respect their customs: Some customs of indigenous communities may be difficult to understand but showing rejection of their offers, such as when they give you food to eat, can be offensive. Where possible, you should not refuse these offers. But if you cannot accept something for personal, ethical or religious reasons, you must be graceful and apologetic in saying no.
                    </h6>
                </li>
                <li>
                    <h6 style={{ marginTop: "10px" }}>
                    Be more than just a spectator: Make an effort to get involved. Join in with work and activities, be sociable and try to learn a few words of the language. And try not to spend too much time taking too many photos, you are there to experience something and make memories rather than to document.
                    </h6>
                </li>
            </ul>
        </div>
        <div style={{ marginTop: "50px" }}>
            <h3 style={{ fontWeight: "600" }}>Third law: Be respectful of the country you’re in</h3>
            <h6 style={{ marginTop: "10px" }}>It’s not just the indigenous peoples who are your hosts, but also the country you are in. As a visitor under that country’s jurisdiction, you must abide by its laws.</h6>
            <h6 style={{ marginTop: "25px" }}>When you book your trip, we’ll send you specific information for that area at that time. But whenever and wherever you go, you should first do some research into the local laws and customs. Laws can vary on anything from the clothes you’re allowed to wear to how you cross a road, and most countries won’t let you off breaking them just because you’re a foreigner and didn’t know. It is your job to find these out before visiting.</h6>
        </div>
        <div style={{ marginTop: "50px" }}>
            <h3 style={{ fontWeight: "600" }}>Fourth law: Be respectful of our planet</h3>
            <h6 style={{ marginTop: "10px" }}>Our Earth is our lifeblood. And the areas you visit will be directly responsible for the survival of amazing groups of people and all kinds of other life. Damaging the environment could damage communities forever. To earn any right to enjoy, we must help preserve.</h6>
            <h6 style={{ marginTop: "25px" }}>If there’s anything specific to consider about the local environment, we’ll let you know in advance of your trip. But wherever you go, you should never...</h6>
            <ul>
                <li>
                    <h6 style={{ marginTop: "10px" }}><strong>Destroy:</strong> Agricultural areas, wildlife, habitats, etc.</h6>
                </li>
                <li>
                    <h6 style={{ marginTop: "10px" }}><strong>Hunt animals:</strong> Unless you are invited to join a hunt with the indigenous hosts, and then only on their terms.</h6>
                </li>
                <li>
                    <h6 style={{ marginTop: "10px" }}><strong>Litter:</strong> If you bring waste in, carry it back out.</h6>
                </li>
            </ul>
        </div>
      </Container>
    </div>
  );
};
