import React from "react";
import Heading from "../Common/Heading";
import SingleFaq from "./SingleFaq";
import { FaqProps } from "../../Helpers/types";

const Index = () => {
  const faqData: FaqProps[] = [
    {
      question: "Is rating free?",
      answer: "Yes!",
    },
    {
      question: "Will you notify my boss?",
      answer: "No. We will never inform your boss that you have rated them.",
    },
    {
      question: "How do you use my Boss' email address?",
      answer:
        "We use it to identify your boss and to include all ratings about them to compute their BossBouncer rating.",
    },
    {
      question:
        "If my rating is confidential, why do you need my personal email address?",
      answer:
        "We send an OTP code to you through email so that you never have to remember a password. We hope you hate passwords as much as we do!",
    },
    {
      question: "Can I change a previous rating?",
      answer: "This feature is coming soon. Please watch your Dashboard page.",
    },
    {
      question: "Why did you create BossBouncer.io?",
      answer:
        "Bad bosses are ruining too many people's life. We aim to fix that. You can help by rating ALL of your current and previous bosses. And tell your friends!",
    },
    {
      question: "Who does BossBouncer help, and how?",
      answer:
        "Individuals who seek work will be able to look at a manager's BossBouncer rating BEFORE applying for a job, so bad bosses can be avoided and good bosses can be found. Also, businesses who regularly refer their employees to anonymously rate bosses will create a wonderful work environment and attract the best employees. That's a win for everyone, except bad bosses and those who protect them.",
    },
    {
      question: "Can I rate bosses that I reported to in the past?",
      answer: "Yes, go for it!",
    },
    {
      question: "Can I submit more than one rating for the same boss?",
      answer:
        "No, but you will soon be able to change your rating if your working relationship improves or declines. Watch your Dashboard page for this new feature soon.",
    },
  ];

  return (
    <div className="component">
      <div style={{ width: "100%", padding: "10px" }}>
        <div className="heading-div">
          <Heading heading={"FAQs"} />
        </div>
        <div>
          {faqData.map((eachfaq, key) => (
            <SingleFaq question={eachfaq.question} answer={eachfaq.answer} />
          ))}
        </div>
        {/* <div className="content-div">
          <ShowData />
        </div> */}
      </div>
    </div>
  );
};

export default Index;
