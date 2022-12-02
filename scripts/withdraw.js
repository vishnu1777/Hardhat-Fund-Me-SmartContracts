
const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts
    const fundMe = await ethers.getContract("FundMe", deployer)
    const transactionReceipt = await fundMe.withdraw()
    await transactionReceipt.wait(1)
    console.log("got it Back")
}



main().then(() => process.exit(0)).catch((error) => {
    console.log(error)
    process.exit(1)
})