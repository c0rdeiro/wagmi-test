import { ConnectButton } from "@rainbow-me/rainbowkit";
import { formatUnits } from "ethers/lib/utils.js";
import { useAccount, useContractRead } from "wagmi";
import { abi } from "../abi";

import { Account } from "../components";

function Page() {
  const { isConnected } = useAccount();

  const { data, isError, isLoading } = useContractRead({
    address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
    abi: abi,
    functionName: "getHunger",
    onSuccess(data) {
      console.log(parseFloat(formatUnits(data?.toString(), 18)));
    },
  });

  return (
    <>
      <h1>wagmi + RainbowKit + Next.js</h1>

      <ConnectButton />
      {isConnected && <Account />}
    </>
  );
}

export default Page;
