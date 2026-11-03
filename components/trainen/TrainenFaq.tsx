'use client'

import FaqList from '@/components/faq/FaqList'
import { trainenFaq } from '@/components/faq/faq-trainen'
import { useTrainenRooster } from './TrainenRoosterContext'

const ROOSTER_QUESTION = 'Hoe lang duurt een les en zijn het vaste momenten?'

export default function TrainenFaq() {
  const { openRooster } = useTrainenRooster()

  const items = trainenFaq.map((item) => {
    if (item.question !== ROOSTER_QUESTION) return item

    return {
      question: item.question,
      schemaAnswer: item.answer,
      answer: (
        <>
          Lessen voor volwassenen, Teens en ZilverFitness duren 60 minuten, Kids 45 minuten. We
          werken met een vast{' '}
          <button type="button" onClick={() => openRooster()}>
            rooster
          </button>{' '}
          in onze app: je meldt je aan voor de les waar je aan mee wilt doen.
        </>
      ),
    }
  })

  return <FaqList items={items} tone="light" variant="landing" />
}
