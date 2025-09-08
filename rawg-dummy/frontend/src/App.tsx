import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import { Show } from '@chakra-ui/react'
import Nav from './components/Nav.tsx'
import { GameGrid } from './components/GameGrid.tsx'


function App() {

  return (
    <>
<Grid

  templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"`}}
    
>
  <GridItem pl='2' bg='orange.300' area={'nav'}>
    <Nav />
  </GridItem>
  <Show above="lg">
  <GridItem pl='2' bg='pink.300' area={'aside'}>
    Aside
  </GridItem>
  </Show>
  <GridItem pl='2' area={'main'}>
  <GameGrid />
  </GridItem>

</Grid>
    </>
  )
}

export default App
