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
  const [ideaArgumentsField, setIdeaArgumentsField] = useState("");

  const clearInput = () => {
    setLongSymbol("");
    setShortSymbol("");
    setIdeaArgumentsField("");
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
        ideaArguments: ideaArgumentsField,
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
        onChange={({ target }) =>
          setLongSymbol(target.value.toLocaleUpperCase())
        }
        placeholder="long symbol eg. AAPL "
      />
      <Input
        id="write-idea-short"
        type="text"
        value={shortSymbol}
        onChange={({ target }) =>
          setShortSymbol(target.value.toLocaleUpperCase())
        }
        placeholder="short symbol eg. GOOG"
      />
      <TextArea
        id="write-idea-ideaArguments"
        type="text"
        value={ideaArgumentsField}
        onChange={({ target }) => setIdeaArgumentsField(target.value)}
      />
      <FormButtonWrapper>
        <Button id="write-idea-button">add idea</Button>
      </FormButtonWrapper>
    </Form>
  );
};

export default WriteDownIdeaForm;
