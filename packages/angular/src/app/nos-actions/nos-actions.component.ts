import { Component } from '@angular/core';
import nos from '../../nos/nosStore';

@Component({
  selector: 'nos-actions',
  templateUrl: './nos-actions.component.html',
  styleUrls: ['./nos-actions.component.scss']
})
export class NosActionsComponent {
  nos = nos;

  neo = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
  gas = '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7';
  rpx = 'ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9';

  // Add your smart contract's scriptHash here
  scriptHash = '';

  // The operation of your smart contract you want to (test)invoke
  operation = '';

  // The necessary arguments for you (test)invoke
  args = [];

  // The storagekey you want to query
  key = '';

  // The asset, amount and receiver of your send function
  receiver = '';
  amount = '';
  asset = this.gas;

  // and testInvoke
  invoke = {
    scriptHash: this.scriptHash,
    operation: this.operation,
    args: this.args
  };

  getStorage = {
    scriptHash: this.scriptHash,
    key: this.key
  };

  send = {
    amount: this.amount,
    asset: this.asset,
    receiver: this.receiver
  };

  handleAlert = async func => {
    console.log(await func);
    alert(await func);
  }

  handleClaimGas = () =>
    this.nos
      .claimGas()
      .then(alert)
      .catch(alert)
}
