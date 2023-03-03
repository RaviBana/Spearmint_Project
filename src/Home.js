import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { RiFileEditLine } from 'react-icons/ri'


const Home = () => {

    const [formData, setFormData] = useState({})
    const [allFormData, setAllFormData] = useState([])
    const [arrNumber, setArrNumber] = useState(0)
    const [checkBox, setCheckBox] = useState(true)
    const [checkBox1, setCheckBox1] = useState(true)

    const onChangeHandler = (e) => {
        let Name = e.target.name
        let Value = e.target.value
        if (Name == 'simpleMomentumType') {
            setFormData({ ...formData, simpleMomentum: { ...formData.simpleMomentum, type: Value } })
        }
        else if (Name == 'simpleMomentumValue') {
            setFormData({ ...formData, simpleMomentum: { ...formData.simpleMomentum, value: Value } })
        }
        else if (Name == 'Type') {
            setFormData({ ...formData, trailSL: { ...formData.trailSL, Type: Value } })
        }
        else if (Name == 'instrumentMove') {
            setFormData({ ...formData, trailSL: { ...formData.trailSL, Value: { [Name]: Value } } })
        }
        else if (Name == 'stopLossMove') {
            setFormData({ ...formData, trailSL: { ...formData.trailSL, Value: { ...formData.trailSL.Value, [Name]: Value } } })
        }
        else {

            setFormData({ ...formData, [Name]: Value })
        }

    }

    const changeArrNumber = (e) => {
        e.preventDefault()
        setArrNumber(1)
    }

    const submitForm = (e) => {
        e.preventDefault()
        document.getElementById('submittedForm').classList.remove('displayNone')
        setInterval(() => {
            document.getElementById('submittedForm').classList.add('displayNone')
        }, 3000);


        setAllFormData([...allFormData, formData])
    }

    // console.log(formData)
    // console.log(allFormData)

    return (
        <div>
            <div id='submittedForm' className='displayNone'>
                Form has been submitted successfuly...
            </div>
            <form onSubmit={submitForm}>
                <div id='mainForm'>

                    <div id='formData'>
                        <div>
                            Total lot
                            <input type="number" name="lots" id="" onChange={onChangeHandler} required />
                        </div>

                        <div>
                            Position
                            <select name="positionType" value={formData['positionType']} onChange={onChangeHandler} required>
                                <option >Select Position..</option>
                                <option value="buy" id="">Buy</option>
                                <option value="sell" id="">Sell</option>
                            </select>
                        </div>
                        <div>
                            Option Type
                            <select name="optionType" onChange={onChangeHandler}>
                                <option >Select Option..</option>
                                <option value="call">Call</option>
                                <option value="put">Put</option>
                            </select>
                        </div>
                        <div>
                            Expiry
                            <select name="ExpiryType" onChange={onChangeHandler}>
                                <option >Select Expiry..</option>
                                <option value="monthly">Monthly</option>
                                <option value="weekly">Weekly</option>
                            </select>
                        </div>
                        <div>
                            Select Strike Criteria
                            <select name="selectStrikeCriteria" onChange={onChangeHandler}>
                                <option >Select Strike</option>
                                <option value="StrikeType">Strike Type</option>
                                <option value="premiumRange">Premium Range</option>
                            </select>
                        </div>
                    </div>

                    <div id='form-btn'>
                        <button onClick={changeArrNumber}> Add Leg </button>
                        <button> Cancel </button>
                    </div>
                </div>

                <div id='formPage'>

                    {
                        [...Array(arrNumber)].map((e, i) => {
                            return (

                                <div id='copyForm' key={i}>

                                    <div id='copyFormData'>
                                        <div>
                                            Lots
                                            <input type="number" value={formData.lots} name="lots" id="" onChange={onChangeHandler} />
                                        </div>

                                        <div>

                                            <select name="positionType" value={formData['positionType']} onChange={onChangeHandler}>
                                                <option >Select Position..</option>
                                                <option value="buy" id="">Buy</option>
                                                <option value="sell" id="">Sell</option>
                                            </select>
                                        </div>
                                        <div>

                                            <select name="optionType" value={formData.optionType} onChange={onChangeHandler}>
                                                <option >Select Option..</option>
                                                <option value="call">Call</option>
                                                <option value="put">Put</option>
                                            </select>
                                        </div>
                                        <div>

                                            <select name="ExpiryType" value={formData.ExpiryType} onChange={onChangeHandler}>
                                                <option >Select Expiry..</option>
                                                <option value="monthly">Monthly</option>
                                                <option value="weekly">Weekly</option>
                                            </select>
                                        </div>
                                        <div>
                                            Select Strike
                                            <select name="selectStrikeCriteria" value={formData.selectStrikeCriteria} onChange={onChangeHandler}>
                                                <option >Select Strike</option>
                                                <option value="StrikeType">Strike Type</option>
                                                <option value="premiumRange">Premium Range</option>
                                            </select>
                                        </div>
                                        <div id='edit-btn'>
                                            <i onClick={() => setArrNumber(arrNumber - 1)}> <AiFillDelete /></i>
                                            <i onClick={() => setArrNumber(arrNumber + 1)}><RiFileEditLine /></i>
                                        </div>
                                    </div>


                                    <div id='copyFormData1'>
                                        <div>
                                            <div>
                                                <input type="checkbox" name="" id="momentum" onClick={() => setCheckBox(!checkBox)} />
                                                <label htmlFor="momentum">Simple Momentum</label>
                                            </div>

                                            <div>
                                                <select disabled={checkBox} name="simpleMomentumType" value={formData?.simpleMomentum?.type} id="" onChange={onChangeHandler}>
                                                    <option >Momentum..</option>
                                                    <option value="pointsUp">Points Up</option>
                                                    <option value="pointsDown">Points Down</option>
                                                </select>

                                                <span>
                                                    <input disabled={checkBox} type="number" name="simpleMomentumValue" value={formData?.simpleMomentum?.value} id="" onChange={onChangeHandler} />
                                                </span>
                                            </div>
                                        </div>


                                        <div>
                                            <div >
                                                <input type="checkbox" name="trailSL" id="trail" onClick={() => setCheckBox1(!checkBox1)} />
                                                <label htmlFor="trail">Trail SL</label>
                                            </div>

                                            <div>
                                                <select disabled={checkBox1} name="Type" id="" value={formData?.trailSL?.Type} onChange={onChangeHandler}>
                                                    <option>Trail..</option>
                                                    <option value="points">Points</option>
                                                    <option value="percentage">Percentage</option>
                                                </select>

                                                <span id='spanInput'>
                                                    <input disabled={checkBox1} type="number" name="instrumentMove" id="" value={formData?.trailSL?.Value?.instrumentMove} onChange={onChangeHandler} />
                                                    <input disabled={checkBox1} type="number" name="stopLossMove" id="" value={formData?.trailSL?.Value?.stopLossMove} onChange={onChangeHandler} />
                                                </span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }


                </div>
                <div id='submit-btn'>
                    <button >Final Submit</button>
                </div>


            </form>

        </div>
    )
}

export default Home