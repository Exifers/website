import React from 'react'
import { Leaderboard } from '../../src/components/Leaderboard'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import LeaderboardRow from '../../src/elements/LeaderboardRow'

test('if leaderboard sends right entry to rows', () => {
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

  const instance = component.root
  const leaderboardRows = instance.findAllByType(LeaderboardRow)
  expect(leaderboardRows.length).toBe(1)
  expect(leaderboardRows[0].props.entry).toEqual(leaderboardEntriesMock[0])
})

test('if leaderboard sorts data from props', () => {
  const entryWithSmallAverageScore = {
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
  }
  const entryWithBigAverageScore = {
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
  const leaderboardEntriesMock = [
    entryWithSmallAverageScore,
    entryWithBigAverageScore
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

  const instance = component.root

  const leaderboardRows = instance.findAllByType(LeaderboardRow)
  expect(leaderboardRows.length).toBe(2)

  expect(leaderboardRows[0].props.entry).toEqual(entryWithBigAverageScore)
  expect(leaderboardRows[1].props.entry).toEqual(entryWithSmallAverageScore)
})

test('if leaderboard doesn\'t print players with empty game results', () => {
  const leaderboardEntriesMock = [
    {
      id: 2,
      pseudo: 'Swan',
      email: 'swan.raynolds@gmail.com',
      gameResults: []
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

  const instance = component.root
  const leaderboardRows = instance.findAllByType(LeaderboardRow)
  expect(leaderboardRows.length).toBe(0)
})
