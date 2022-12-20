import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '../../../../hooks';
import { ChevronRight } from '../../../icons';
import { LabelledInput, ResponsiveBox } from '../../../ui';
import { DropdownButton, Title } from '../styles';
import * as Styled from './styles';

const FORMS = [
  {
    tab: 'Order',
    action: 'https://pc-connect.co.uk/tracking/trackorder',
    placeholder: 'Postcode',
    inputName: 'postcode',
  },
  {
    tab: 'Return',
    action: 'https://pc-connect.co.uk/tracking/trackreturn',
    placeholder: 'RMA No.',
    inputName: 'rmaNumber',
  },
  {
    tab: 'System',
    action: 'https://pc-connect.co.uk/tracking/trackbuild',
    placeholder: 'Build No.',
    inputName: 'buildNumber',
  },
];

const variants = {
  open: {
    height: 'auto',
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  closed: {
    height: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

export default function Delivery() {
  const [activeTab, setActiveTab] = useState('Order');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const isMatch = useMediaQuery('(min-width: 640px)');

  const handleChangeInvoiceNumber = (e) => setInvoiceNumber(e.target.value);
  const handleChangeSecondInput = (e) => setSecondInput(e.target.value);
  const handleChangeTab = (tab) => setActiveTab(tab);
  const handleToggleOpen = () => setIsOpen(!isOpen);

  // Open the menu if the screen is larger than 640px.
  useEffect(() => {
    isMatch ? setIsOpen(true) : setIsOpen(false);
  }, [isMatch]);

  const title = 'Delivery / Tracking Information';

  return (
    <Styled.Container>
      <ResponsiveBox sx={{ display: { mobileXs: 'none', tabletSm: 'block' } }}>
        <Title>{title}</Title>
      </ResponsiveBox>

      <ResponsiveBox sx={{ display: { tabletSm: 'none' } }}>
        <DropdownButton
          type="button"
          isOpen={isOpen}
          aria-expanded={isOpen}
          aria-controls="tracking-info-form"
          onClick={handleToggleOpen}
        >
          {title}
          <ChevronRight width={15} height={20} />
        </DropdownButton>
      </ResponsiveBox>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="tracking-info-form"
            style={{ overflow: 'hidden' }}
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <p>Order now to receive by tomorrow.</p>

            <div style={{ display: 'flex' }}>
              {FORMS.map((form) => (
                <Styled.Button
                  key={form.tab}
                  isActive={form.tab === activeTab}
                  onClick={() => handleChangeTab(form.tab)}
                  type="button"
                >
                  {form.tab}
                </Styled.Button>
              ))}
            </div>

            {FORMS.map((form) => {
              if (form.tab === activeTab) {
                return (
                  <Styled.Form
                    key={form.tab}
                    action={form.action}
                    method="post"
                  >
                    <LabelledInput
                      label="Invoice Number:"
                      hideLabel
                      inputStyles={Styled.inputStyles}
                      name="invoiceNumber"
                      type="text"
                      placeholder="Invoice No."
                      autoComplete="off"
                      maxLength="10"
                      aria-required
                      required
                      onChange={handleChangeInvoiceNumber}
                      value={invoiceNumber}
                    />

                    <LabelledInput
                      label={`${form.placeholder.replace('No.', 'Number')}:`}
                      hideLabel
                      inputStyles={Styled.inputStyles}
                      name={form.inputName}
                      type="text"
                      placeholder={form.placeholder}
                      autoComplete="off"
                      maxLength="10"
                      aria-required
                      required
                      onChange={handleChangeSecondInput}
                      value={secondInput}
                    />

                    <Styled.SubmitButton
                      type="submit"
                      title="Submit"
                      aria-label="Submit"
                    >
                      <ChevronRight width={14} height={19} fill="white" />
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
