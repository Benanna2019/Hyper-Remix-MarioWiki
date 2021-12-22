import { connect } from "hyper-connect";
import "dotenv/config";

const hyper = connect(`${process.env.HYPER}`);

export { hyper };
