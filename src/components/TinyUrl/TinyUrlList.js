import React, { useState, useCallback, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

import { getTinyUrls, deleteTinyUrl } from '../../services/TinyUrlService';

const TINY_URL_API = process.env.REACT_APP_TINY_URL_API;

const TinyUrlList = (props) => {
  const { classes } = props;

  const [tinyUrlData, setTinyUrlData] = useState([]);
  const [mount, setMount] = useState(false);
  const history = useHistory();
  const handleAddClick = () => history.push('/create');
  const handleDeleteClick = async (slugToDelete) => {
    const deleteSlugUrl = `${TINY_URL_API}/${slugToDelete}`;
    const deleted = await deleteTinyUrl(deleteSlugUrl);
    if (deleted) {
      const tinyUrlsData = await getTinyUrls(TINY_URL_API);
      setTinyUrlData(tinyUrlsData.data);
      toast.info(`Tiny URL with slug: '${slugToDelete}' was deleted.`);
    }
  };
  const options = {
    customToolbar: () => {
      return (
        <IconButton style={{ order: -1 }}>
          <AddIcon onClick={handleAddClick} />
        </IconButton>
      );
    },
  };
  const columns = [
    { label: 'Tiny URL', name: 'short_url' },
    { label: 'Slug', name: 'slug' },
    { label: 'URL', name: 'url' },
    {
      label: 'Action',
      name: 'slug',
      options: {
        customBodyRender: (value) => {
          return (
            <div>
              <DeleteTwoToneIcon
                onClick={() => {
                  handleDeleteClick(value);
                }}
              />
            </div>
          );
        },
      },
    },
  ];

  const getTinyUrlsData = useCallback(async () => {
    try {
      const tinyUrlsData = await getTinyUrls(TINY_URL_API);
      setTinyUrlData(tinyUrlsData.data);
    } catch (e) {
      // write error message to display to UI
      toast.error(e.message);
    }
  }, []);

  useEffect(() => {
    if (!mount) {
      setMount(true);
      getTinyUrlsData();
    }
  }, [mount, getTinyUrlsData]);

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Paper className={classes.paper}>
          <MUIDataTable title="List of Tiny URLs" data={tinyUrlData} columns={columns} options={options} />;
        </Paper>
      </Grid>
      <ToastContainer autoClose={4000} position={toast.POSITION.TOP_RIGHT} />
    </Grid>
  );
};

TinyUrlList.propTypes = {
  classes: PropTypes.shape(),
};

TinyUrlList.defaultProps = {
  classes: {},
};

export default TinyUrlList;
