import Mock from "mockjs"
import data from "./data.json"

export default Mock.mock("/api/data", "get", data)