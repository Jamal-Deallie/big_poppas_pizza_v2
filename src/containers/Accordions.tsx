'use client';

import { useState } from 'react';
import { faqs } from '@/data/data';
import { GridAccordion } from '@/components/GridAccordion';
import styles from '@/styles/containers/Accordions.module.scss';
import cn from 'classnames';


export default function Accordions() {
  const [currIndx, setCurrIndx] = useState<number | null>(null);
  const [prevIndx, setPrevIndx] = useState<number | null>(null);

  function toggleElement(indx: number) {
    setPrevIndx(prevIndx => currIndx);
    setCurrIndx(currIndx => indx);
  }

  return (
    <div className='tertiary-theme'>
      <div className='py-lg-128 py-sm-64'>
        <div className='grid-inner'>
          <div className={styles['title-cont']}>
            <h1 className='title-lg  border clr-secondary'>Got Questions?</h1>
          </div>
          <div className={styles['desc-cont']}>
            <p className='txt-md'>
              "Got questions? Check out our FAQs for quick answers! From opening
              hours to special dietary options, we've got you covered. Save time
              and get the info you need before ordering your delicious pizza!"
            </p>
          </div>

          <div className={cn(styles['accordion-cont'], 'lg-mt-10 sm-mt-6')}>
            {faqs.map(({ question, answer, id }) => {
              return (
                <div
                  key={id}
                  className={(styles['accordion-wrap'], 'mb-lg-32 mb-sm-16')}>
                  <GridAccordion title={question} content={answer} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
