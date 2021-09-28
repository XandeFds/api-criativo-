function tempo(){
    const dycamicDate = new Date ();
    const dynamicDateString = dycamicDate.toGMTString();
    <div>
        {dynamicDateString} (dinâmcio)
    </div>
}

export default tempo;