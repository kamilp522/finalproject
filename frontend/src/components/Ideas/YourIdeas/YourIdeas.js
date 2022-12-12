import React from "react";
import { useState, useEffect } from "react";

import ideasService from "../../../services/ideas";

import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { Container } from "../../UI/Container/Container";
import { H2 } from "../../UI/Text/Text";

import {
  Idea,
  IdeaSymbols,
  IdeaSymbol,
  IdeaBold,
  IdeaArguments,
} from "./YourIdeasElements";

import { useSelector } from "react-redux";

const YourIdeas = () => {
  const logged = useSelector((store) => store.logged);

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

  useEffect(() => {
    getUserIdeas();
  }, []);

  return (
    <Wrapper>
      <H2>{`${logged.username}'s Ideas for Trades`}</H2>
      <Container>
        {ideas &&
          ideas.map((idea) => (
            <Idea key={idea.id}>
              <IdeaSymbols>
                <IdeaSymbol>
                  Long: <IdeaBold>{idea.long}</IdeaBold>
                </IdeaSymbol>
                <IdeaSymbol>
                  Short: <IdeaBold>{idea.short}</IdeaBold>
                </IdeaSymbol>
              </IdeaSymbols>
              <IdeaArguments>{idea.arguments}</IdeaArguments>
            </Idea>
          ))}
      </Container>
    </Wrapper>
  );
};

export default YourIdeas;
