import React from 'react'
import { Leaderboard } from '../../src/components/Leaderboard'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'

test('if leaderboard and prints data from prop', () => {
  const leaderboardEntriesMock = [
    {
      id: 0,
      pseudo: 'John',
      email: 'john.doe@gmail.com',
      gameResults: [
        {
          id: 0,
          date: '2019/05/01',
          stage1Score: 10,
          stage2Score: 20,
          stage3Score: 30,
          stage4Score: 40,
          visible: true,
          player: 0
        }
      ]
    },
    {
      id: 1,
      pseudo: 'Ann',
      email: 'ann.smith@gmail.com',
      gameResults: [
        {
          id: 1,
          date: '2019/05/02',
          stage1Score: 20,
          stage2Score: 30,
          stage3Score: 40,
          stage4Score: 50,
          visible: true,
          player: 1
        }
      ]
    }
  ]

  const component = renderer.create(
    <MemoryRouter>
      <Leaderboard
        leaderboardEntries={leaderboardEntriesMock}
      />
    </MemoryRouter>
  )
  const json = component.toJSON()
  expect(json).toMatchSnapshot()
})
