import '../../styles.css';
const Home = () => (
  <div className="about">
    <h1 className=''>Personal Finance Splitter</h1>
    <p>
      Welcome to <b style={{ color: 'white' }}>Personal Finance Splitter</b> – your go-to app for effortlessly managing and splitting bills
      with friends, family, or roommates. Whether you’re dining out, sharing rent, or splitting any other shared expenses, this
      app makes it simple to calculate each person’s share, track who has paid, and keep everything organized.
    </p>
    <br /><br />
    <p>
      With a user-friendly interface and powerful backend features, Personal Finance Splitter takes the stress out
      of managing finances in group settings. Tailored for individuals and small groups, it <b style={{ color: 'white' }}>helps avoid awkward
      conversations and ensures everyone pays their fair share.</b>
    </p>
    <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem' }}>Try now!</h3>
    <div className="btnContainer">
      <a id="tryBtn" href="/register">Sign Up</a>
      <br />
      <a id="tryBtn" href="/splitEqually.html">Split Equally</a>
      <h5 style={{ display: 'inline', margin: '0 1rem', fontSize: '1.5rem' }}> / </h5>
      <a id="tryBtn" href="/whoPaidWho.html">Custom Split</a>
    </div>
    <h2>Features</h2>
    <div className="features">
      <ol>
        <li>Users can input the total amount and the number of people splitting the bill.</li>
        <li>Ability to account for different payment shares (e.g., one person paid for the drinks, another paid for food).</li>
        <li>Real-time updates to the amount each person owes.</li>
        <li>Option to add recurring expenses (like rent) with split options (equal or custom).</li>
      </ol>
    </div>
  </div>
);

export default Home;