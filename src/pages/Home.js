import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const steps = ['AMOUNT', 'DETAILS', 'PAYMENT'];
const datas = [
    {
        id: 1,
        title: '$380.00',
        price: 380,
        description:
            'each month could help rebuild 2 square meters of Hong Kong oyster reefs.',
        picture:
            'https://clarety-tnc-hk.s3.amazonaws.com/cmsimages/web/929df44eace411ebb35c.jpg',
    },
    {
        id: 2,
        title: '$280.00',
        price: 280,
        description:
            'could help plant 4 new trees each month for wildlife habitat, carbon capture and clean air.',
        picture:
            'https://clarety-tnc-hk.s3.amazonaws.com/cmsimages/web/b874ffc4acdf11ebb35c.jpg',
    },
    {
        id: 3,
        title: '$580.00',
        price: 580,
        description:
            'each month could help 5 baby sea turtles survive to adulthood.',
        picture:
            'https://clarety-tnc-hk.s3.amazonaws.com/cmsimages/web/ee4729c9ae2011ebb35c.jpg',
    },
];

function Home() {

    const [activeStep, setActiveStep] = React.useState(0);
    const [activeData, setActiveData] = React.useState([]);
    const [amount, setAmount] = React.useState(0);
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSetItem = (data) => {
        console.log(data);
        setActiveData(data);
    }
  
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-6'>
                    <div className='card-header'>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>
                                            {label}
                                        </StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            {activeStep === 0 && (
                                <div>
                                    {datas &&
                                        datas.map((data) => {
                                            return (
                                                <Card
                                                    sx={{ display: 'flex' }}
                                                    className={`mt-2 ${
                                                        activeData.id ===
                                                        data.id
                                                            ? 'items-active'
                                                            : 'items'
                                                    }`}
                                                    onClick={() =>
                                                        handleSetItem(data)
                                                    }
                                                    key={`items_${data.id}`}
                                                >
                                                    <CardMedia
                                                        component='img'
                                                        sx={{ width: 151 }}
                                                        image={data.picture}
                                                        alt='Live from space album cover'
                                                    />
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection:
                                                                'column',
                                                        }}
                                                    >
                                                        <CardContent
                                                            sx={{
                                                                flex: '1 0 auto',
                                                            }}
                                                        >
                                                            <Typography
                                                                component='div'
                                                                variant='h5'
                                                            >
                                                                {data.title}
                                                            </Typography>
                                                            <Typography
                                                                variant='subtitle1'
                                                                component='div'
                                                            >
                                                                {
                                                                    data.description
                                                                }
                                                            </Typography>
                                                        </CardContent>
                                                    </Box>
                                                </Card>
                                            );
                                        })}
                                    <div className='input-group mb-2 mt-3'>
                                        <div className='input-group-prepend'>
                                            <div className='input-group-text'>
                                                Rp
                                            </div>
                                        </div>
                                        <input
                                            type='number'
                                            className='form-control'
                                            placeholder='Other Amount'
                                            value={amount}
                                            onChange={(e) =>
                                                setAmount(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            )}
                            {activeStep === 1 && (
                                <>
                                    <form>
                                        <div className='form-group'>
                                            <label className='mb-2'>Type</label>
                                            <select
                                                name='type'
                                                className='form-control'
                                            >
                                                <option value='individual'>
                                                    Individual
                                                </option>
                                                <option value='bussiness'>
                                                    Bussiness
                                                </option>
                                            </select>
                                        </div>
                                        <div className='form-group mt-3'>
                                            <label className='mb-2'>
                                                Title
                                            </label>
                                            <select
                                                name='type'
                                                className='form-control'
                                            >
                                                <option value='Mr.'>Mr.</option>
                                                <option value='Mrs.'>
                                                    Mrs.
                                                </option>
                                                <option value='Ms.'>Ms.</option>
                                                <option value='Miss.'>
                                                    Miss.
                                                </option>
                                            </select>
                                        </div>
                                        <div className='row mt-3'>
                                            <div className='form-group col-md-6'>
                                                <label className='mb-2'>
                                                    First name
                                                </label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                />
                                            </div>
                                            <div className='form-group col-md-6'>
                                                <label className='mb-2'>
                                                    Last name
                                                </label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group mt-3'>
                                            <label className='mb-2'>
                                                Email
                                            </label>
                                            <input
                                                type='text'
                                                className='form-control'
                                            />
                                        </div>
                                        <div className='form-group form-check mt-3'>
                                            <input
                                                type='checkbox'
                                                className='form-check-input'
                                                id='exampleCheck1'
                                            />
                                            <label
                                                className='form-check-label'
                                                forHtml='exampleCheck1'
                                            >
                                                I agree to receive
                                                communications from TNC Hong
                                                Kong, including my donation
                                                receipt.{' '}
                                                <button className='btn btn-link'>
                                                    Click here for more
                                                    details...
                                                </button>
                                            </label>
                                        </div>
                                    </form>
                                </>
                            )}
                            {activeStep === 2 && (
                                <div>
                                    <Accordion
                                        expanded={expanded === 'panel1'}
                                        onChange={handleChange('panel1')}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel1a-content'
                                            id='panel1a-header'
                                        >
                                            <Typography>Credit Card</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis
                                                eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion
                                        expanded={expanded === 'panel2'}
                                        onChange={handleChange('panel2')}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel2a-content'
                                            id='panel2a-header'
                                        >
                                            <Typography>e-Wallet</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis
                                                eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion
                                        expanded={expanded === 'panel3'}
                                        onChange={handleChange('panel3')}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel3a-content'
                                            id='panel3a-header'
                                        >
                                            <Typography>
                                                Debit Card (ATM Card)
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='custom-control custom-radio'>
                                                            <input
                                                                type='radio'
                                                                id='customRadio1'
                                                                name='customRadio'
                                                                className='custom-control-input'
                                                            />
                                                            <label
                                                                className='custom-control-label px-3 label-payments'
                                                                for='customRadio1'
                                                            >
                                                                Jenius
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='custom-control custom-radio'>
                                                            <input
                                                                type='radio'
                                                                id='customRadio2'
                                                                name='customRadio'
                                                                className='custom-control-input'
                                                            />
                                                            <label
                                                                className='custom-control-label px-3 label-payments'
                                                                for='customRadio2'
                                                            >
                                                                Bank BRI
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            )}
                        </div>
                        <div className='card-footer'>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    pt: 2,
                                }}
                            >
                                <Button
                                    color='inherit'
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                    size={'large'}
                                    variant={'contained'}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button
                                    onClick={handleNext}
                                    size={'large'}
                                    color={'warning'}
                                    variant={'contained'}
                                >
                                    {activeStep === steps.length - 1
                                        ? 'Finish'
                                        : 'Next'}
                                </Button>
                            </Box>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <p>
                                <strong>
                                    Thank you for taking a stand today, before
                                    it's too late.
                                </strong>
                            </p>
                            <p>
                                Since 1951, we’ve protected 52 million hectares
                                together. But our world today is threatened by
                                challenges humanity has never faced before, and
                                there’s so much more to be done. Today, Nature
                                needs a Champion like YOU.
                            </p>
                            <p>
                                With your gift, YOU make a difference in Hong
                                Kong and globally, for people, wildlife, and
                                wild places…
                            </p>
                            <p>
                                YOU fight climate change through effective,
                                science-backed action…
                            </p>
                            <p>
                                YOU help protect and restore health to our
                                oceans, rivers and fisheries…
                            </p>
                            <p>
                                YOU join us, and more than one million
                                supporters who believe in the power of people,
                                partnerships, and collaboration to solve the
                                greatest environmental threats of our time.
                            </p>
                            <img
                                alt='donation desc'
                                src='https://clarety-tnc-hk.s3.amazonaws.com/userimages/Confirmation%20Pages/sealion-donation.jpeg'
                                className='img-fluid'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
