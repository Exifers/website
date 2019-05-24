import LeaderboardRow from '../../src/elements/LeaderboardRow'
import React from 'react'
import { MemoryRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import renderer from 'react-test-renderer'
import GrowingBar from '../../src/elements/GrowingBar'

test('if leaderboard row prints right data from props', () => {
  const entryMock = {
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

  const globalScoreMock = () => 1234

  const component = renderer.create(
    <MemoryRouter>
      <LeaderboardRow
        entry={entryMock}
        globalScore={globalScoreMock}
      />
    </MemoryRouter>
  )

  const json = component.toJSON()
  expect(json).toMatchSnapshot()

  const instance = component.root

  const navlink = instance.findByType(NavLink)
  expect(navlink.props.children).toBe(entryMock.pseudo)

  const growingBar = instance.findByType(GrowingBar)
  expect(growingBar.props.value).toBe(globalScoreMock(entryMock))

  const numberOfGamesCell = instance.findByProps({ 'data-test-class': 'numberOfGamesCell' })
  expect(numberOfGamesCell.props.children).toBe(
    entryMock.gameResults.length > 10 ? '10+' : entryMock.gameResults.length
  )
})
