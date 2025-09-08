import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
game: Game;
}
interface Game {
    id: number;
    name: string;
    background_image: string;
}

export const gameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src=""/>
            <CardBody>
                <Heading fontSize="2xl">{game.name}
                </Heading>
            </CardBody>
        </Card>
        );
};