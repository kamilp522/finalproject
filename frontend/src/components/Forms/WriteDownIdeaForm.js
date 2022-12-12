import React from "react";
import { useState } from "react";

import { setNotification } from "../../reducers/notificationReducer";

import ideaService from "../../services/ideas";

import {
  Form,
  Input,
  TextArea,
  FormButtonWrapper,
} from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";

const WriteDownIdeaForm = () => {
  const logged = useSelector((store) => store.logged);

  const dispatch = useDispatch();

  const [longSymbol, setLongSymbol] = useState("");
  const [shortSymbol, setShortSymbol] = useState("");
  const [argumentsField, setArgumentsField] = useState("");

  const clearInput = () => {
    setLongSymbol("");
    setShortSymbol("");
    setArgumentsField("");
  };

  const setMessageAndError = (message, error) => {
    dispatch(setNotification({ message, error }));
  };

  const sendIdea = async (event) => {
    event.preventDefault();

    try {
      const content = await ideaService.createIdea({
        long: longSymbol,
        short: shortSymbol,
        arguments: argumentsField,
        userId: logged.userId,
      });
      setMessageAndError(`idea for trade added`);
      clearInput();
    } catch (exception) {
      const errorMessage = exception.response.data.error;
      setMessageAndError(`${errorMessage}`, true);
      clearInput();
    }
  };

  return (
    <Form onSubmit={sendIdea}>
      <Input
        id="write-idea-long"
        type="text"
        value={longSymbol}
        onChange={({ target }) => setLongSymbol(target.value)}
        placeholder="long symbol eg. AAPL "
      />
      <Input
        id="write-idea-short"
        type="text"
        value={shortSymbol}
        onChange={({ target }) => setShortSymbol(target.value)}
        placeholder="short symbol eg. GOOG"
      />
      <TextArea
        id="write-idea-arguments"
        type="text"
        value={argumentsField}
        onChange={({ target }) => setArgumentsField(target.value)}
      />
      <FormButtonWrapper>
        <Button id="write-idea-button">Add Idea</Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default WriteDownIdeaForm;
