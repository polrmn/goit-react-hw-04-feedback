import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification'
import { useState } from 'react';


const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerFeedbackBtn = event => {
    const {name} = event.target;
    
    switch(name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case  'bad':
        setBad(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      default: 
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  
  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  
  return (
    <>
      <Section title="PLease leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handlerFeedbackBtn}
        />
        {total ?
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positiveFeedbackPercentage}
        />
          :
          <Notification message="There is no feedback" />}
      </Section>
    </>
    )
  }

export default App;
