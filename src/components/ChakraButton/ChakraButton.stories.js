import { Button } from "@chakra-ui/react"
import { decorators } from "../../../.storybook/preview"

export default {
    title: 'Chakra/Button',
    component: Button,
    // decorators: decorators
}

export const Success = () => <Button colorScheme='green'>Success</Button>
export const Danger = () => <Button colorScheme='red'>Danger</Button>
