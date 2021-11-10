/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { IncrementalNG, IncrementalNGInterface } from "../IncrementalNG";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "getRN",
    outputs: [
      {
        internalType: "uint256",
        name: "RN",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "getUncorrelatedRN",
    outputs: [
      {
        internalType: "uint256",
        name: "RN",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_block",
        type: "uint256",
      },
    ],
    name: "requestRN",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610180806100206000396000f3fe60806040526004361061004a5760003560e01c80631c73601e1461004f5780637b9c34e0146100815780638381f58a14610096578063c1cbbca7146100ac578063ca4742f1146100bd575b600080fd5b34801561005b57600080fd5b5061006f61006a366004610131565b6100e7565b60405190815260200160405180910390f35b61009461008f366004610131565b6100ba565b005b3480156100a257600080fd5b5061006f60005481565b6100946100ba366004610131565b50565b3480156100c957600080fd5b5061006f6100d8366004610131565b50600080546001810190915590565b60008054600181018255806100ff5750600092915050565b6040805133602082015290810182905260600160408051601f1981840301815291905280516020909101209392505050565b60006020828403121561014357600080fd5b503591905056fea2646970667358221220562300a549bfb467e77cd13c2ac51e0c94951c728324d67e8def7ce9760400f864736f6c63430008090033";

export class IncrementalNG__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IncrementalNG> {
    return super.deploy(overrides || {}) as Promise<IncrementalNG>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IncrementalNG {
    return super.attach(address) as IncrementalNG;
  }
  connect(signer: Signer): IncrementalNG__factory {
    return super.connect(signer) as IncrementalNG__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncrementalNGInterface {
    return new utils.Interface(_abi) as IncrementalNGInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IncrementalNG {
    return new Contract(address, _abi, signerOrProvider) as IncrementalNG;
  }
}
