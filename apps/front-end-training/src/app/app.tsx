// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {SignUp} from '../components/form'
export function App() {
  return (
    <>
    <header>
        <h1>Submission form</h1>
      </header>
      <section>
      <SignUp />
      </section>
      </>
  );
}

export default App;
