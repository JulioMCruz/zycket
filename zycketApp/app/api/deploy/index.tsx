import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
const abi = require("../../../contracts/Zycket.json").abi;
const bytecode = require("../../../contracts/Zycket.json").bytecode;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const metadataUri = req.body.metadataUri;

    if (!metadataUri) {
      res.status(400).json({ message: "metadataUri is required" });
      return;
    }

    const PRIVATE_KEY = process.env.PRIVATE_KEY ?? "";
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    const owner = wallet.connect(provider);

    const contractFactory = new ethers.ContractFactory(abi, bytecode, wallet);
    const deploy = await contractFactory.deploy(owner.getAddress(), metadataUri);

    await deploy.deployed();

    console.log("Contract deployed to:", deploy.address);

    res.status(200).json({
      message: "Sucess",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error", output: error });
  }
}
