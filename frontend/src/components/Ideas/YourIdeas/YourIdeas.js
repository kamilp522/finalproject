import React from "react";
import { useState, useEffect } from "react";

import * as colors from "../../variables/colors";

import ideasService from "../../../services/ideas";

import { setMessageAndError } from "../../../helpers/setMessageAndError";

import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { Container } from "../../UI/Container/Container";
import { Button } from "../../UI/Button/Button";
import { H2 } from "../../UI/Text/Text";

import {
  Idea,
  IdeaSymbols,
  IdeaSymbol,
  IdeaBold,
  IdeaArguments,
} from "./YourIdeasElements";

import { useDispatch, useSelector } from "react-redux";

const YourIdeas = () => {
  const logged = useSelector((store) => store.logged);
  const dispatch = useDispatch();

  const [ideas, setIdeas] = useState(null);

  const getUserIdeas = async () => {
    const allIdeas = await ideasService.getIdeas();
    const userIdeas = [];

    allIdeas.forEach((idea) => {
      if (idea.user === logged.userId) {
        userIdeas.push(idea);
      }
    });

    setIdeas(userIdeas);
  };

  const removeIdea = async (event, ideaId) => {
    const ideaElement = event.target.parentNode;
    await ideasService.deleteIdea({ ideaId, userId: logged.userId });
    ideaElement.remove();
    setMessageAndError(dispatch, "idea removed", true);
  };

  useEffect(() => {
    getUserIdeas();
  }, []);

  return (
    <Wrapper>
      <H2 tabIndex="0">{`${logged.username}'s Ideas for Trades`}</H2>
      <Container>
        {ideas &&
          ideas.map((idea) => (
            <Idea tabIndex="0" key={idea.id}>
              <IdeaSymbols>
                {idea.long && (
                  <IdeaSymbol>
                    Long: <IdeaBold>{idea.long}</IdeaBold>
                  </IdeaSymbol>
                )}
                {idea.short && (
                  <IdeaSymbol>
                    Short: <IdeaBold>{idea.short}</IdeaBold>
                  </IdeaSymbol>
                )}
              </IdeaSymbols>
              <IdeaArguments>Arguments: {idea.ideaArguments}</IdeaArguments>
              <Button
                aria-label={"remove this idea"}
                onClick={() => removeIdea(event, idea.id)}
                className="button--red"
              >
                remove
              </Button>
            </Idea>
          ))}
      </Container>
    </Wrapper>
  );
};

export default YourIdeas;
