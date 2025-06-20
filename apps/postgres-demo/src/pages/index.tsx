import { useState } from 'react';
import {
  CTALinkOrButton, NewText,
} from '@bluedot/ui';

const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="section-body gap-2">
      <NewText.H1>postgres-demo</NewText.H1>
      <NewText.P>This is some example text</NewText.P>
      <CTALinkOrButton onClick={() => setCount((c) => c + 1)}>
        count is {count}
      </CTALinkOrButton>
      <NewText.P>You can test logging in below</NewText.P>
      <CTALinkOrButton url="/authed" withChevron>View page requiring auth</CTALinkOrButton>
    </div>
  );
};

export default HomePage;
