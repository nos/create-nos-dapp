import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { injectNOS, NOSTypes } from "../../nos";

const styles = {
  button: {
    margin: "16px",
    fontSize: "14px"
  }
};

const fallback = () => "You're not working in nOS!";

class NOSActions extends React.Component {
  handleGetAddress = async () =>
    alert(await this.props.nos.getAddress({ fallback }));

  handleClaimGas = () =>
    this.props.nos
      .claimGas({ fallback })
      .then(alert)
      .catch(alert);

  handleGetBalance = async scriptHash =>
    alert(await this.props.nos.getBalance(scriptHash, { fallback }));

  handleTestInvoke = async (scriptHash, operation, args) =>
    alert(
      await this.props.nos.testInvoke(scriptHash, operation, args, { fallback })
    );

  handleInvoke = async (scriptHash, operation, args) =>
    alert(
      await this.props.nos.testInvoke(scriptHash, operation, args, { fallback })
    );

  handleGetStorage = async (scriptHash, key) =>
    alert(await this.props.nos.getStorage(scriptHash, key, { fallback }));

  render() {
    const { classes } = this.props;

    // Get Balance
    const neo =
      "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    // const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
    // const rpx = "ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9";

    // (test) Invoke
    const neoAuth = "2f228c37687d474d0a65d7d82d4ebf8a24a3fcbc";
    const operation = "9937f74e-1edc-40ae-96ad-1120166eab1b";
    const args = "ef68bcda-2892-491a-a7e6-9c4cb1a11732";

    // Get Storage
    const neoBlog = "85e9cc1f18fcebf9eb8211a128807e38d094542a";
    const key = "post.latest";

    return (
      <React.Fragment>
        <button className={classes.button} onClick={this.handleGetAddress}>
          Get Address
        </button>
        <button
          className={classes.button}
          onClick={() => this.handleGetBalance(neo)}
        >
          Get NEO Balance
        </button>
        {/*
          <button
            className={classes.button}
            onClick={() => this.handleGetBalance(gas)}
          >
            Get GAS Balance
          </button>
          <button
            className={classes.button}
            onClick={() => this.handleGetBalance(rpx)}
          >
            Get RPX Balance
          </button>
        */}
        <button className={classes.button} onClick={this.handleClaimGas}>
          Claim Gas
        </button>
        <button
          className={classes.button}
          onClick={() => this.handleTestInvoke(neoAuth, operation, args)}
        >
          TestInvoke (NeoAuth)
        </button>
        {/*
          <button
            className={classes.button}
            onClick={() => this.handleInvoke(neoAuth, operation, args)}
          >
            Invoke (NeoAuth)
          </button>
        */}
        <button
          className={classes.button}
          onClick={() => this.handleGetStorage(neoBlog, key)}
        >
          GetStorage (NeoBlog)
        </button>
      </React.Fragment>
    );
  }
}

NOSActions.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  nos: NOSTypes.isRequired
};

export default injectNOS(injectSheet(styles)(NOSActions));
