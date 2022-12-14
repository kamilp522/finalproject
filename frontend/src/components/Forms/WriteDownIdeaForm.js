import React from "react";
import { useState } from "react";

import { setMessageAndError } from "../../helpers/setMessageAndError";

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

  const sendIdea = async (event) => {
    event.preventDefault();

    try {
      const content = await ideaService.createIdea({
        long: longSymbol,
        short: shortSymbol,
        ideaArguments: ideaArgumentsField,
        userId: logged.userId,
      });
      setMessageAndError(dispatch, `idea for trade added`);
      clearInput();
    } catch (exception) {
      const errorMessage = exception.response.data.error;
      setMessageAndError(dispatch, `${errorMessage}`, true);
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
        id="write-idea-arguments"
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
