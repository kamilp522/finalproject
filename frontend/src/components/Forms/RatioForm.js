import React from "react";

import PropTypes from "prop-types";

import * as colors from "../variables/colors";

import { setMessageAndError } from "../../helpers/setMessageAndError";

import ratioService from "../../services/ratio";

import { getLastXTradingDays } from "../../helpers/getLastXTradingDays";

import {
    Form,
    Input,
    FormButtonWrapper,
    Label,
} from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";
import { useDispatch } from "react-redux";

const RatioForm = ({
    typedRatioLongSymbol,
    setTypedRatioLongSymbol,
    typedRatioShortSymbol,
    setTypedRatioShortSymbol,
    setCurrentRatioLongSymbol,
    setCurrentRatioShortSymbol,
    setChartData,
    setLoading,
}) => {
    const dispatch = useDispatch();

    const clearInput = () => {
        setTypedRatioLongSymbol("");
        setTypedRatioShortSymbol("");
    };

    const getRatio = async (event) => {
        event.preventDefault();
        const days = 250;

        setCurrentRatioLongSymbol(typedRatioLongSymbol);
        setCurrentRatioShortSymbol(typedRatioShortSymbol);
        setChartData({ labels: null, datasets: null });
        setLoading(true);

        try {
            const ratio = await ratioService.getRatioData({
                typedRatioLongSymbol,
                typedRatioShortSymbol,
                days,
            });

            const ratio_chartData = ratioService.getRatioChartParams(ratio);
            const lastXTradingDays = await getLastXTradingDays(days);

            setChartData({
                labels: lastXTradingDays.reverse(),
                datasets: [
                    {
                        data: ratio_chartData,
                        backgroundColor: colors.clr_violet_600,
                        borderColor: colors.clr_violet_600,
                        hoverBackgroundColor: colors.clr_light_black_800,
                    },
                ],
            });

            clearInput();
        } catch (exception) {
            const errorMessage = exception.response.data.error;
            setMessageAndError(dispatch, `${errorMessage}`, true);
            setLoading(false);
            clearInput();
        }
    };

    return (
        <Form onSubmit={getRatio}>
            <Label>long stock symbol: </Label>
            <Input
                id="ratio-long-symbol"
                type="text"
                value={typedRatioLongSymbol}
                onChange={({ target }) =>
                    setTypedRatioLongSymbol(target.value.toLocaleUpperCase())
                }
                placeholder="e.g. GOOG"
            />
            <Label>short stock symbol: </Label>
            <Input
                id="ratio-short-symbol"
                type="text"
                value={typedRatioShortSymbol}
                onChange={({ target }) =>
                    setTypedRatioShortSymbol(target.value.toLocaleUpperCase())
                }
                placeholder="e.g. AAPL"
            />

            <FormButtonWrapper>
                <Button id="ratio-button">look up ratio</Button>
            </FormButtonWrapper>
        </Form>
    );
};

RatioForm.propTypes = {
    typedRatioLongSymbol: PropTypes.string.isRequired,
    setTypedRatioLongSymbol: PropTypes.func.isRequired,
    typedRatioShortSymbol: PropTypes.string.isRequired,
    setTypedRatioShortSymbol: PropTypes.func.isRequired,
    setCurrentRatioLongSymbol: PropTypes.func.isRequired,
    setCurrentRatioShortSymbol: PropTypes.func.isRequired,
    setChartData: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
};

export default RatioForm;
