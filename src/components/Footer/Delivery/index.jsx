import { useState, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../../../hooks/useMediaQuery';
import MaterialIcon from '../../MaterialIcon';
import { Heading, DropdownButton } from '../styles';
import * as Styled from './styles';

const forms = [
  {
    action: 'https://pc-connect.co.uk/tracking/trackorder',
    placeholder: 'Postcode',
    name: 'postcode',
  },
  {
    action: 'https://pc-connect.co.uk/tracking/trackreturn',
    placeholder: 'RMA No.',
    name: 'rmaNumber',
  },
  {
    action: 'https://pc-connect.co.uk/tracking/trackbuild',
    placeholder: 'Build No.',
    name: 'buildNumber',
  },
];

export default function Delivery() {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 650);
  const isMatch = useMediaQuery('(min-width: 650px)');
  const id = useId();
  const heading = 'Delivery / Tracking Information';

  const handleSetActiveTab = (index) => setActiveTab(index);
  const handleOpen = () => setIsOpen(!isOpen);

  // Prevents the menu being stuck closed when resizing from a smaller window width
  useEffect(() => {
    isMatch ? setIsOpen(true) : setIsOpen(false);
  }, [isMatch]);

  return (
    <Styled.Container>
      {isMatch ? (
        <Heading>{heading}</Heading>
      ) : (
        <DropdownButton
          type="button"
          isOpen={isOpen}
          aria-expanded={isOpen}
          aria-controls="delivery"
          onClick={handleOpen}
        >
          {heading}
          <MaterialIcon iconSize="30px">chevron_right</MaterialIcon>
        </DropdownButton>
      )}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="delivery"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <Styled.Text>Order now to receive by tomorrow.</Styled.Text>
            <Styled.ButtonContainer>
              {['Order', 'Return', 'System'].map((text, index) => (
                <Styled.TabButton
                  key={text}
                  active={index === activeTab}
                  onClick={() => handleSetActiveTab(index)}
                  type="button"
                >
                  {text}
                </Styled.TabButton>
              ))}
            </Styled.ButtonContainer>
            {forms.map((item, index) => {
              if (index === activeTab) {
                return (
                  <Styled.Form
                    key={item.name}
                    action={item.action}
                    method="post"
                  >
                    <label htmlFor={`${id}-invoice`} hidden>
                      Invoice Number
                    </label>
                    <Styled.Input
                      id={`${id}-invoice`}
                      name="invoiceNumber"
                      autoComplete="off"
                      type="text"
                      maxLength="10"
                      placeholder="Invoice No."
                      required
                    />
                    <label htmlFor={id} hidden>
                      {item.placeholder.replace('No.', 'Number')}
                    </label>
                    <Styled.Input
                      id={id}
                      name={item.name}
                      autoComplete="off"
                      type="text"
                      maxLength="10"
                      placeholder={item.placeholder}
                      required
                    />
                    <Styled.SubmitButton
                      type="submit"
                      title="Submit"
                      aria-label="Submit"
                    >
                      <MaterialIcon iconSize="32px" iconColor="white">
                        chevron_right
                      </MaterialIcon>
                    </Styled.SubmitButton>
                  </Styled.Form>
                );
              }
              return undefined;
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </Styled.Container>
  );
}
