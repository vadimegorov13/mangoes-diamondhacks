import { Transition } from '@mantine/core';
import Phone from '../images/phone.svg';

function PhoneTransition({ opened }) {
  return (
    <Transition mounted={opened} transition="slide-up" duration={400} timingFunction="ease">
      {(styles) => <div style={styles}>{Phone}</div>}
    </Transition>
  );
}

export default PhoneTransition;