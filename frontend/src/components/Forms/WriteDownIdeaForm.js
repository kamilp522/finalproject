import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setMessageAndError } from "../../helpers/setMessageAndError";

import ideaService from "../../services/ideas";

import {
  Form,
  Input,
  TextArea,
  FormButtonWrapper,
  Label,
} from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";
import { scrollToTop } from "../../helpers/scrollToTop";

const WriteDownIdeaForm = () => {
  const logged = useSelector((store) => store.logged);

  const dispatch = useDispatch();

  const [longSymbol, setLongSymbol] = useState("");
  const [shortSymbol, setShortSymbol] = useState("");
  const [ideaArgumentsField, setIdeaArgumentsField] = useState("");

  const clearInput = () => {
    setLongSymbol("");
    setShortSymbol("");
    setIdeaArgumentsField("");
  };

  const sendIdea = async (event) => {
    event.preventDefault();

    try {
      await ideaService.createIdea({
        long: longSymbol,
        short: shortSymbol,
        ideaArguments: ideaArgumentsField,
        userId: logged.userId,
      });
      setMessageAndError(dispatch, "idea for trade added");
      clearInput();
    } catch (exception) {
      const errorMessage = exception.response.data.error;
      setMessageAndError(dispatch, `${errorMessage}`, true);
      clearInput();
    }
  };

  return (
    <Form onSubmit={sendIdea}>
      <Label>long stock symbol: </Label>
      <Input
        id="write-idea-long"
        type="text"
        value={longSymbol}
        onChange={({ target }) =>
          setLongSymbol(target.value.toLocaleUpperCase())
        }
        placeholder="e.g. AAPL "
      />
      <Label>short stock symbol: </Label>
      <Input
        id="write-idea-short"
        type="text"
        value={shortSymbol}
        onChange={({ target }) =>
          setShortSymbol(target.value.toLocaleUpperCase())
        }
        placeholder="e.g. GOOG"
      />
      <Label style={{ marginBottom: "0.125em" }}>arguments for the idea:</Label>
      <TextArea
        id="write-idea-arguments"
        type="text"
        value={ideaArgumentsField}
        onChange={({ target }) => setIdeaArgumentsField(target.value)}
      />
      <FormButtonWrapper>
        <Button id="write-idea-button" onClick={scrollToTop}>
          add idea
        </Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default WriteDownIdeaForm;
